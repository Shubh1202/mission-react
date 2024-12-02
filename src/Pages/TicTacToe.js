import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, color, turn }) => {
    return (
        <FontAwesomeIcon icon={icon} className={`${color} text-3xl`} turn={turn} />
    )
}

const findWiner = (square) => {
    const probabilityRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < square.length; i++) {
        // console.log(`probability ${i}`, probabilityRows[i])
        if (probabilityRows[i] === undefined) {
            return false
        }

        let [x, y, z] = probabilityRows[i]

        x = square[x]?.props?.turn
        y = square[y]?.props?.turn
        z = square[z]?.props?.turn

        // if(square[x] === square[y] && square[y] === square[z] && square[z] === square[x]){
        //     return square[x]
        // }

        if (x === undefined && y === undefined && z === undefined) {
            return null
        } else if (x === y && y === z && z === x) {
            console.log(`ddd`)
            return x
        }

    }
    return null
}

const Square = ({ index, setDefaultTurn, xIsDefaultTurn, state, setState, isDescideWinner }) => {

    const handleClick = (i) => {
        if (isDescideWinner) return false

        let blockValue = state.slice()
        if (blockValue[i] === null) {
            // blockValue[i] = (xIsDefaultTurn) ? 'X' : 'O'
            blockValue[i] = (xIsDefaultTurn) ? <Icon icon={faFaceGrinStars} color='text-yellow-500' turn='x' /> : <Icon icon={faFaceAngry} color='text-red-600' turn='o' />
            setDefaultTurn((previousValue) => !previousValue)
            setState(blockValue)
        }
        // console.log(`winnner`, winner)
    }

    return (
        <th onClick={() => handleClick(index)} className="hover:cursor-pointer">{state[index]}</th>
    )
}

// const Board = ({setDefaultTurn, xIsDefaultTurn}) => {

//     return (
//         <>
//             <tr>
//                 <Square index={0} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={1} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={2} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//             </tr>
//             <tr>
//                 <Square index={3} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={4} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={5} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//             </tr>
//             <tr>
//                 <Square index={6} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={7} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//                 <Square index={8} setDefaultTurn={setDefaultTurn} xIsDefaultTurn={xIsDefaultTurn}/>
//             </tr>
//         </>

//     )
// }

const TicTacToe = () => {
    const [xIsDefaultTurn, setDefaultTurn] = useState(true)
    const [state, setState] = useState(Array(9).fill(null))
    const [isDescideWinner, setWinner] = useState(false)

    let winner = findWiner(state)

    let nextTurn = (xIsDefaultTurn) ? <Icon icon={faFaceGrinStars} color='text-yellow-500' /> : <Icon icon={faFaceAngry} color='text-red-600' />
    if (winner != null && isDescideWinner === false) {
        setWinner((previousValue) => !previousValue)
    } else if (winner !== null) (
        winner = (winner === 'x') ? <Icon icon={faFaceGrinStars} color='text-yellow-500' /> : <Icon icon={faFaceAngry} color='text-red-600' />
    )

    const playAgain = () => {
        setDefaultTurn(true)
        setState(Array(9).fill(null))
        setWinner(false)
        nextTurn = null
    }


    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-center">
                    <div className="flex bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                        <div className="mr-5">
                            <h1 className="flex mt-10 whitespace-nowrap">
                                {(winner === null) ? (
                                    <>
                                        <span className="mr-5">Next player is:</span> {nextTurn}
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-5">Winner is:</span> {winner}
                                    </>
                                )}
                            </h1>
                            <div className="mt-5">
                                {(winner !== null) ? (
                                    <button
                                        onClick={playAgain}
                                        type="button"
                                        className="w-full bg-blue-600 text-white font-bold py-1 rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                        Play Again
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div>
                            <table border="1" align="center" className="gaming-table">
                                <tbody>
                                    <tr>
                                        <Square
                                            index={0}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={1}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={2}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                    </tr>
                                    <tr>
                                        <Square
                                            index={3}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={4}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={5}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                    </tr>
                                    <tr>
                                        <Square
                                            index={6}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={7}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                        <Square
                                            index={8}
                                            setDefaultTurn={setDefaultTurn}
                                            xIsDefaultTurn={xIsDefaultTurn}
                                            state={state}
                                            setState={setState}
                                            isDescideWinner={isDescideWinner}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TicTacToe