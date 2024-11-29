import { useState } from "react"

const Counter = () => {
    let [count, updateCounter] = useState(0)

    function increaseCounter() {
        count++
        updateCounter(count)
    }

    function decreaseCounter() {
        if (count <= 0) return false
        count--
        updateCounter(count)
    }

    console.log(`Counter Parent component`, count)

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h4 className="text-2xl font-bold text-center text-blue-600 mb-6">Click on button to count number</h4>

                <div className="flex items-center justify-center">
                <button onClick={() => increaseCounter()} type="button" className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300">+</button>
                <input type="text" id="text" name="text" className="w-half px-4 py-2 border border-gray-300 rounded-lg text-center focus:outline-none mx-5" placeholder="0" required readOnly value={count} />
                <button onClick={() => decreaseCounter()} type="button" className="bg-red-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 transition duration-300">-</button>

                </div>

            </div>
        </div>
    )
}

export default Counter