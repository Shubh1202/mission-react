const OtherHeroSection = (props) => {
    return (
        <div className="bg-blue-600 text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">{ props.title }</h1>
                <p className="text-lg mt-2">{ props.subTitle }</p>
            </div>
        </div>
    )
}

export default OtherHeroSection