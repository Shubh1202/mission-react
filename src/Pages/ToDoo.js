import { useState, useCallback, useEffect, useRef } from 'react'
import Todos from './Todos'

const ToDoox = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const [newText, addText] = useState('')
 

    // const addTodo = () => {
    //     setTodos((todo) => [...todo, 'New Todo'])
    // }

    const addTodo = useCallback(() => {
        setTodos((todo) => [...todo, 'New Todo'])
    }, [todos])


    const removeToDo = useCallback((index) => {
        todos.splice(index, 1)
        setTodos((todos) => [...todos])
    }, [todos])

    function increment(){
        setCount((c) => c+1)
    }
    return (
        <>
            <Todos addTodo={addTodo} todos={todos} removeToDo={removeToDo}/>
            <hr />
            <div>
                Count: {count}
            <button onClick={increment} className="px-4 bg-green-600 text-white flex items-center border border-green-500 hover:cursor-pointer hover:bg-green-700 rounded-lg">+</button>

            </div>
        </>
    )
}

const ToDoo = () => {
    const [inputValue, setInputValue] = useState('')
    const count = useRef(0)
    const previousInputValue = useRef('')

    useEffect(() => {
        previousInputValue.current = inputValue
        count.current++
    }, [inputValue])
    return (
        <>
            <ToDoox />
            <div className='mt-5'>
                <h1 className='text-2xl font-bold'>useRef Example</h1>
                <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='border border-blue-500 outline outline-none px-3 py-1'/>
                <h1>Component Render Count: {count.current}</h1>
                <h1>Current Input Value: {inputValue}</h1>
                <h1>Previous Input Value: {previousInputValue.current}</h1>
            </div>
        </>
    )
}

export default ToDoo