import {
    ChevronDownIcon,
    ChevronUpIcon,
    UserGroupIcon,
    CalendarIcon,
    ClockIcon,
    UsersIcon,
    DesktopComputerIcon,
}
from "@heroicons/react/outline";
import {useState} from 'react'
function Sidebarrow({Icon,Title}) {
    const [showmore,setshowmore]=useState(false) 
    const Arr=[{
        icon:<UsersIcon className="h-6"/>,
        title:"Friends"
    },
    {
        icon:<CalendarIcon className="h-6"/>,
        title:"Schedule"
    },
    {
        icon:<UserGroupIcon className="h-6"/>,
        title:"Group"
    },
    {
        icon:<DesktopComputerIcon className="h-6"/>,
        title:"Story"
    },
    {
        icon:<ClockIcon className="h-6"/>,
        title:"Time"
    },
    // {
    //     icon:<ChevronDownIcon className="h-6"/>,
    //     title:"Show More"
    // },
    // {
    //     icon:<ChevronUpIcon className="h-6"/>,
    //     title:"Show More"
    // },


]
    return (
        <div>
            {Arr.slice(0,showmore ? 3 : Arr.length).map((a,index)=>(
               <div key={index} className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer text-gray-500">
                   {a.icon}
                   <p className="hidden sm:inline-flex font-medium">{a.title}</p>
               </div>
           ))}
        {showmore ? 
            <div onClick={()=>setshowmore(false)} className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer text-gray-500">
                <ChevronDownIcon  className="h-6"/> 
                <p className="hidden sm:inline-flex font-medium">Show More</p>
            </div>
            : 
            <div onClick={()=>setshowmore(true)} className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer text-gray-500">
                <ChevronUpIcon  className="h-6"/>
                <p className="hidden sm:inline-flex font-medium">Show Less</p>
            </div>
                    }
        </div>
    )
}

export default Sidebarrow
