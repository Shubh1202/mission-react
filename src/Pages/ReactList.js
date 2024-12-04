const itemList = [
    "Monitor",
    "CPU",
    "Mouse",
    "Keyboard",
    "Printer",
    "Speaker",
    "Hard Disk",
    "RAM",
    "ROM",
    "UPS",
    "Touch Pad",
    "Touch Screen",
]


const ReactList = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h4 className="text-2xl font-bold text-center text-blue-600 mb-6">React List</h4>
                    <ol>
                        {itemList.map((data, index) => <li key={index}>{data}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ReactList