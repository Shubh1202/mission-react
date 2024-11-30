import { useCallback, useState, memo, useRef } from "react"
// import Todos from "./Todos"

const ToDos = memo(({toDoList, removeToDo}) => {
    console.log(`Children component`)
    return (
        <>
        {toDoList.length > 0 ? toDoList?.map((item, index) => {
            return (
                <div className="flex gap-8 my-3" key={index}>
                    <p  key={index}>{item}</p>
                    <button onClick={() => removeToDo(index)} className="px-4 bg-red-600 text-white flex items-center border border-red-500 hover:cursor-pointer hover:bg-red-700 rounded-lg">Remove Todo</button>
                </div>
            )
        }) : ''}
        </>
    )
})

const UseCallBack = () => {
    const [newText, addText] = useState('')
    const [toDoList, setToDo] = useState([])
    const inputBox = useRef()

    // const addToDooData = () => {
    //     if(!newText) return false

    //     setToDo((data) => [...data, newText])
    //     addText('')
    // }

    // const addToDooData = useCallback(() => {
    //     if(!newText) return false
    //     setToDo((data) => [...data, newText])
    //     addText('')
    // }, [toDoList])

    // const addToDooData = () => {
    //     console.log('hello user')
    // }


    const addToDooData = useCallback(() => {
        if(!newText){
            inputBox.current.focus()
            return false
        }
        const isStringExist = toDoList.findIndex((data) => data === newText)
        if(isStringExist > -1){
            inputBox.current.focus()
            return false
        }

        console.log(isStringExist)
        setToDo((prevValue) => [...prevValue, newText])
        addText('')
    }, [newText, toDoList])

    // function removeToDo(){
    //     alert('remove todo')
    // }

    const removeToDo = useCallback((index) => {
        toDoList.splice(index, 1)
        setToDo((prevValue) => [...prevValue])
    }, [toDoList])
    // console.log(`Parent Component`)
    return (
        <div className="container mx-auto p-4">
            <p>useCallback function hooks return memoized call back function, or we can say that it is used for optimize the component or preventing the component from render when its dependencis not change</p>
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h4 className="text-blue-600 text-2xl font-bold text-center mb-6">Generate To Doo</h4>
                    <div className="flex w-full max-w-lg gap-3">
                        <input type="text" value={newText} ref={inputBox} onChange={(event) => addText(event.target.value)} name="string" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="off"/>
                        <button onClick={addToDooData} className="px-4 bg-blue-600 text-white flex items-center border border-blue-500 hover:cursor-pointer hover:bg-blue-700 rounded-lg">
                            Add
                        </button>
                    </div>
                    <div className="my-5">
                        {/* <Todos todos={toDoList} removeToDo={removeToDo}/> */}

                        <ToDos toDoList={toDoList} removeToDo={removeToDo}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UseCallBack