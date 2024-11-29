import { memo } from "react";

const Todos = ({ todos = [], addTodo = '', removeToDo = '' }) => {
    console.log(`children render`)
    return (
        <>
            <h2>My Todos</h2>
            <div className="">
                <div>
                    {todos.length > 0 ? todos.map((todo, index) => {
                        return (
                            <div className="flex gap-8 my-3" key={index}>
                                <p>{todo}</p>
                                <button onClick={() => removeToDo(index)} className="px-4 bg-red-600 text-white flex items-center border border-red-500 hover:cursor-pointer hover:bg-red-700 rounded-lg">Remove Todo</button>
                            </div>
                        )
                    }) : ''}
                    {addTodo && <button onClick={addTodo} className="px-4 bg-blue-600 text-white flex items-center border border-blue-500 hover:cursor-pointer hover:bg-blue-700 rounded-lg">Add Todo</button>}

                </div>
            </div>
        </>
    )
}

export default memo(Todos)