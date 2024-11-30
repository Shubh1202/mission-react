import React, {useState, useEffect, useCallback, useRef} from "react"

const RandomString = () => {

    let [randomStr, setRandomString] = useState("")
    let [stringLength, generateLength] = useState(8)
    let [isNumberAllowed, allowedNumber] = useState(false)
    let [isCharacterAllowed, allowedCharacter] = useState(false)
    const inputBox = useRef()

    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = '0123456789'
    const chaaracters = '@#%&*=+-_{}()'

    function copyText(){
        const inputField = inputBox.current
        inputField.select()
        inputField.setSelectionRange(0, 99999)
        window.navigator.clipboard.writeText(inputField.value)
    }

    // function generateNewString(value){
    //     let strLen = +value
    //     let string = ''

    //     for(let i=0; i< strLen; i++){
    //         prx = Math.floor(Math.random()*str.length+1)
    //         string += str[prx]
    //     }

    //     setRandomString(string)
    // }

    const generateNewString = useCallback(() => {
        let string = ''
        let finalString = str
        if(isNumberAllowed) finalString += numbers
        if(isCharacterAllowed) finalString += chaaracters

        for(let i=0; i < stringLength; i++){
            const roundeNumber = Math.floor(Math.random()* finalString.length)
            string += finalString[roundeNumber]
        }
        setRandomString(string)

    }, [stringLength, isNumberAllowed, isCharacterAllowed])

    // generateNewString()

    useEffect(() => {
        generateNewString()
    },[stringLength, isNumberAllowed, isCharacterAllowed, generateNewString])

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h4 className="text-blue-600 text-2xl font-bold text-center mb-6">Generate Shuffle String/Password</h4>
                    <div className="relative">
                        <input type="text" name="string" value={randomStr} ref={inputBox} readOnly className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button onClick={copyText} className="absolute top-0 right-0 px-4 py-2 bg-blue-600 text-white flex items-center border border-blue-500 hover:cursor-pointer hover:bg-blue-700 rounded-lg">
                            Copy
                        </button>
                    </div>
                    <div className="mt-5 flex items-center justify-center space-x-3">
                        <p>
                        <input onChange={(event)=> generateLength(event.target.value)} value={stringLength} type="range" min='0' max='100' className="border border-gray-300 rounded-lg focus:outline-none mr-3"/> Length ({stringLength})
                        </p>
                        <p>
                        <input type="checkbox" onChange={() => allowedNumber(!isNumberAllowed)}/> Number {isNumberAllowed}
                        </p>
                        <p>
                        <input type="checkbox" onChange={() => allowedCharacter(!isCharacterAllowed)}/> Character
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomString