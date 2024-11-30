import { useState } from "react"
const colorsList = [
    {title: 'Select color', value: '', textColor: ''},
    {title: 'Red', value: 'red', textColor: 'white'},
    {title: 'Blue', value: 'blue', textColor: 'white'},
    {title: 'Green', value: 'green', textColor: 'white'},
    {title: 'Yellow', value: 'yellow', textColor: 'black'},
    {title: 'Orange', value: 'orange', textColor: 'white'},
    {title: 'Gray', value: 'gray', textColor: 'black'},
]
const BGChanger = () => {
    const [selectedBgColor, colorChanger] = useState('bg-white')
    const [selectedTextColor, textColorChanger] = useState('text-blue-600')

    function updateColor(obj){
        const {bg, text} = JSON.parse(obj)

        const bgColor = (bg) ? bg : ''
        const textColor = (text) ? `text-${text}`?.replaceAll(/ /g, '') : 'text-blue-600'

        colorChanger(bgColor)
        textColorChanger(textColor)
        document.getElementById("wrapper").style.backgroundColor = bg
        // document.getElementById('root').setAttribute('style')
    }

    function resetChanger(){

        colorChanger('#fff')
        textColorChanger('text-blue-600')
        document.getElementById("wrapper").style.backgroundColor = '#f3f4f6'

    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" style={{backgroundColor: selectedBgColor}}>
                    <h4 className={`${selectedTextColor} text-2xl font-bold text-center mb-6`}>Select your favourite color & see the magic..</h4>
                    <div className="my-4">
                        <select name="color" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none" required onChange={(event) => updateColor(event.target.value)}>
                            {colorsList.map((data, index) => <option key={index} value={JSON.stringify({bg: data.value, text:data.textColor})}>{data.title}</option>)}
                        </select>
                    </div>
                    <div className={`${selectedTextColor}`}>
                        Reset background color: <span onClick={() => resetChanger()} className={`${selectedTextColor} text-blue-500 hover:cursor-pointer hover:underline`}>Reset Here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BGChanger