import Image from  "next/image";
function StoryCard({name ,src,profile}) {

    const mystyles={
        backgroundImage: `linear-gradient(360deg,rgb(0, 0, 0,0.6),rgba(0, 0, 0, 0)),url(${src})`,
        backgroundPosition : "center",
    }
    const mystyle={
        backgroundImage: `url(${profile})`,
        backgroundPosition : "center",
       
    }
    return (
        <div className="relative h-14 w-14 bg-cover md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3
             transition duration-200 transform ease-in hover:scale-105 rounded-full lg:rounded-3xl
             flex justify-between flex-col border-2 border-yellow-500 lg:border-0
             " style={mystyles}>
            
            <div className=" h-10 w-10 bg-cover z-100 opacity-0 lg:opacity-100 rounded-full z-50 top-5 left-4 border-2 border-yellow-500" style={mystyle}></div>
            <p className="hidden lg:inline-block bottom-10  text-white font-bold text-center w-full ">{name}</p>
        </div>
    )
}

export default StoryCard
