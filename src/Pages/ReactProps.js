
import image from '../images/20221103.jpg'
const dataList = [
    {
        name: "Shubham Prajapati",
        image,
        description: 'Hi, My self Shubham Prajapati. I have 4+ experience working as a Software Engineer with Node.js PHP and other technologies'
    },
    {
        name: "Amit Singh",
        image,
        description: 'Hi, My self Amit Singh. I have 4+ experience working as a Software Engineer with Node.js PHP and other technologies'
    },
    {
        name: "Adam Smith",
        image,
        description: 'Hi, My self Adam Smith. I have 4+ experience working as a Software Engineer with Node.js PHP and other technologies'
    },
    {
        name: "Virat Kholi",
        image,
        description: 'Hi, My self Virat Kholi. I have 4+ experience working as a Software Engineer with Node.js PHP and other technologies'
    },
    {
        name: "Sanju Samson",
        image,
        description: 'Hi, My self Sanju Samson. I have 4+ experience working as a Software Engineer with Node.js PHP and other technologies'
    },

]

const CardComponent = ({data}) =>{
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img src={data.image} className='z-0 h-full w-full rounded-md object-cover' alt={data.image}/>

            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
            <div className='absolute bottom-4 left-4 text-left'>
                <h1 className='text-lg font-semobold text-white'>{data.name}</h1>
                <p className='mt-2 text-sm text-gray-300'>
                    {data.description}
                </p>
                <button type='button' className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-gradient-to-t bg-pink-500 transparent px-4 py-2 rounded-md'>
                    View Profile
                </button>
            </div>
        </div>        
    )
}


const ReactProps = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Software Developer & Engineer</h2>

            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {dataList.map((item, index) => <CardComponent key={index} data={item}/>)}
                </div>
            </div>

        </div>
    )
}

export default ReactProps