import React, { useEffect, useState } from "react"
import ConfettiExplosion from 'react-confetti-explosion';
import useSound from "use-sound";
import winningSound from '../sounds/winning.wav'
import Xturn from '../sounds/x-turn.mp3'
import Oturn from '../sounds/o-turn.mp3'
import MatchDraw from '../sounds/match-draw.mp3'
import GameMusic from '../sounds/game-music.mp3'

const boxStyle = `bg-white text-center flex items-center justify-center border border-gray-400 text-3xl font-bold hover:bg-gray-100 cursor-pointer`
const TossboxStyle = `text-center border border-gray-400 text-3xl font-bold px-4 py-2`

function findWiner(blocks) {
    const winningProbability = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const winningProbabilityLength = winningProbability.length

    for (let i = 0; i < winningProbabilityLength; i++) {
        const [x, y, z] = winningProbability[i]
        console.log(`${i} ==> `, winningProbability[i])
        if (blocks[x] === blocks[y] && blocks[y] === blocks[z] && blocks[z] === blocks[x]) {
            return blocks[x]
        }

    }

    if (!blocks.includes(null)) {
        return 'draw'
    }

    return null
}

const PringMessage = ({ playAgain, message, isButtonShow = false }) => {
    return (
        <>
            <span className="text-indigo-600 ml-1">{message}</span>
            {isButtonShow && (
                <button type="button" onClick={playAgain} className="ml-3 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition duration-300 btn-play-again">Play Again</button>
            )}
        </>
    )
}

const MessageComponent = ({ isWinnerDecided, nextPlayer, winnerIs, playAgain, isMatchDraw }) => {
    const [playMatchDraw] = useSound(MatchDraw, { volume: 0.5 })

    return (
        <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
                {!isWinnerDecided && !isMatchDraw && (
                    <>
                        Next Turn:
                        <PringMessage playAgain={playAgain} message={nextPlayer} />
                    </>
                )}

                {isWinnerDecided && (
                    <>
                        Winner is:
                        <PringMessage playAgain={playAgain} message={winnerIs} isButtonShow={isWinnerDecided} />
                        <ConfettiExplosion className="explosion" force={1} duration={3000} particleCount={350} width={1600} />
                    </>
                )}

                {isMatchDraw && (
                    <>
                        {playMatchDraw()}
                        <PringMessage playAgain={playAgain} message={winnerIs} isButtonShow={isMatchDraw} />
                    </>
                )}

            </h1>
        </div>

    )
}

const Board = ({ blocks, setBlock, xIsDefaultTurn, setDefaultTurn, isWinnerDecided }) => {
    const [playXturn] = useSound(Xturn, { volume: 0.5 })
    const [playOturn] = useSound(Oturn, { volume: 0.5 })

    function handelClick(index) {
        if (isWinnerDecided) return false

        let boxValue = blocks.slice()
        if (boxValue[index] === null) {
            if (xIsDefaultTurn) {
                boxValue[index] = 'X'
                playXturn();
            } else {
                playOturn()
                boxValue[index] = 'O'
            }
            // boxValue[index] = (xIsDefaultTurn) ? 'X' : 'O'
            setBlock(boxValue)
            setDefaultTurn((prevValue) => !prevValue)
        }
    }

    return blocks.map((item, index) => <div onClick={() => handelClick(index)} className={boxStyle} key={index}>{item}</div>)
}

const TossComponent = ({xPlayer, oPlayer, xIsDefaultTurn, setDefaultTurn, setTossValue, nextPlayer, setNextPlayer}) => {
    const [isButtonClick, setButtonClick] = useState(false)
    function handelToss(){
        setButtonClick((prevValue) => !prevValue)
        setNextPlayer(null)
        setTimeout(function(){
        Math.random() < 0.5 ? setNextPlayer(xPlayer) : setNextPlayer(oPlayer)
            setDefaultTurn((prevValue) => !prevValue)
            // setButtonClick((prevValue) => !prevValue)
            setTimeout(() => {
                setTossValue((prevValue) => !prevValue)
            }, 1000)
        }, 2000)
    }
    return (
        <>
            <div className="flex items-center justify-center gap-10">
                <div className={TossboxStyle}>
                    Player<br />{xPlayer}
                </div>
                <div className={TossboxStyle}>
                    Player<br />{oPlayer}
                </div>
            </div>

            {!nextPlayer &&
           "" 
            }

            <div className={`border-0 hover:bg-white ${boxStyle}`}>
                Toss Winner is: <span className="text-indigo-600 ml-1">{!nextPlayer ? ' ': nextPlayer}</span>
            </div>
            <div onClick={handelToss} className={`border-0 hover:bg-white ${boxStyle}`}>
                <button disabled={isButtonClick} className="bg-blue-600 disabled text-white px-8 rounded-lg hover:bg-blue-700 transition duration-300 btn-play-again">
                    {(!isButtonClick) ? 'TOSS' : 'Tossing...'}
                </button>
            </div>
        </>
    )
}

const TicTakToe = () => {
    const [blocks, setBlock] = useState(Array(9).fill(null))
    const [xIsDefaultTurn, setDefaultTurn] = useState(true)
    const [isWinnerDecided, setDecidedWinner] = useState(false)
    const [isMatchDraw, setMatchDraw] = useState(false)
    const [winnerIs, setWinner] = useState(null)
    const [isExploding, setIsExploding] = useState(false);
    const [playCheer] = useSound(winningSound, { volume: 0.5 });
    const [playBackgroundMusic] = useSound(GameMusic, { volume: 0.2 });
    const [isPlayBackGroundMusic, setPlayBackGroundMusic] = useState(true)
    const [timer, setTimer] = useState(0)
    const [isTossDone, setTossValue] = useState(false)
    const [xPlayer, setXPlayer] = useState('X')
    const [oPlayer, setOPlayer] = useState('O')
    const [nextPlayer, setNextPlayer] = useState(null)

    const winner = findWiner(blocks)
    if (winner && winner !== 'draw' && !isWinnerDecided) {
        setWinner(winner)
        setDecidedWinner((prevValue) => !prevValue)
        playCheer()
    } else if (winner && winner === 'draw' && winnerIs === null) {
        setMatchDraw((prevValue) => !prevValue)
        setWinner('Match Draw')
    }

    function playAgain() {
        setBlock(Array(9).fill(null))
        setDefaultTurn(false)
        setDecidedWinner(false)
        setMatchDraw(false)
        setWinner(null)
        setTossValue((prevValue) => !prevValue)
        setNextPlayer(null)
    }

    useEffect(() => {
        if (nextPlayer === 'O') {
            setPlayBackGroundMusic(false)
        }

        // const timex = setTimeout(function(){
        //     const prx = timer+1
        //     setTimer(prx)
        // }, 1000)

        // if(timer >= 5){
        //     clearTimeout(timex)
        //     setTimer(1)
        //     if(nextPlayer === 'O'){
        //         setWinner('X')
        //         setDecidedWinner(true)
        //     }else if(nextPlayer === 'X'){
        //         setWinner('O')
        //         setDecidedWinner(true)
        //     }
        // }

    }, [nextPlayer, timer])


    return (
        <section className="flex items-center justify-center min-h-screen bg-white-200">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg">
                {!isTossDone &&
                    <>
                        <div className="grid gap-0 w-72 h-72 md:w-50 md:h-50">
                            <TossComponent xPlayer={xPlayer} oPlayer={oPlayer} xIsDefaultTurn={xIsDefaultTurn} setDefaultTurn={setDefaultTurn} setTossValue={setTossValue} nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}/>
                        </div>
                    </>
                }

                {isTossDone &&
                    <>
                        <div className="grid grid-cols-3 grid-rows-3 gap-0 w-72 h-72 md:w-50 md:h-50">
                            {/* {isPlayBackGroundMusic && playBackgroundMusic()} */}
                            <Board blocks={blocks} setBlock={setBlock} xIsDefaultTurn={xIsDefaultTurn} setDefaultTurn={setDefaultTurn} isWinnerDecided={isWinnerDecided} />
                        </div>
                        <MessageComponent playAgain={playAgain} isWinnerDecided={isWinnerDecided} nextPlayer={nextPlayer} winnerIs={winnerIs} isMatchDraw={isMatchDraw} />
                    </>
                }
            </div>
        </section>
    )
}

export default TicTakToe