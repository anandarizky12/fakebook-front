
import {useState} from 'react'
import { BeakerIcon,SearchIcon ,HomeIcon,FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon,ViewGridIcon,ChatIcon,
BellIcon,ChevronDownIcon} from '@heroicons/react/solid'
import HeaderIcons from './HeaderIcons.jsx'
import {useSession,signOut} from 'next-auth/client'
import { useDetectClickOutside } from 'react-detect-click-outside';

function Header({session}) {
    const [dropdown,setdropdown]=useState(false)
    // const [session] = useSession()
    const closeDropdown = () => {
        setdropdown(false);
    }
  
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  
 
    return (
        <div  className="sticky top-0 z-10 flex items-center py-2 md:py-0 px-5 md:px-2 lg:px-5 shadow-md bg-gray-100" >
            <div className="flex items-center w-auto md:w-1/3">
                <img className="w-7" src="/f.png" alt="" />
                <div className=" flex items-center ">
                    <SearchIcon className="h-5 pl-1 absolute gray text-yellow-500"/>
                    <input className="inline-flex p-1 border w-44 rounded-2xl outline-none pl-7 flex-shrink bg-transparent" type="text" placeholder="Search Fakebook" />
                </div>
            </div>
            <div className="flex justify-center flex-grow w-1/3">
                <div className="flex items-center space-x-6 md:space-x-2">
                    <div className="flex flex-col justify-center items-center  h-7">
                            <HeaderIcons  url={"/"} Icon={HomeIcon}/>
                            <p className="hidden md:inline text-xs text-gray-400">Home</p>
                    </div>
                  
                
               
                    {/* <HeaderIcons  url={"/profile"} Icon={PlayIcon}/>  */}
   
                </div>
            </div>
            <div className="flex items-center sm:space-x-2 justify-end w-1/3">
                <img className="rounded-full  md:inline w-8 m-1 md:w-10" src={session.user.image} width={40} height={40} layout="fixed" />
                <p className="font-semibold hidden md:inline whitespace-nowrap pr-3" >{session.user.name.split(' ')[0]}</p>
                <ViewGridIcon  className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <div className="" ref={ref}>
                        <ChevronDownIcon className="inline-flex p-2 h-8 w-8 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300" onClick={()=>setdropdown(!dropdown)}  />
                            <div className={`${dropdown ? 'fixed' : 'hidden'}  right-5 shadow-md w-52 md:w-72 rounded-md bg-gray-200  h-auto p-1 md:p-3 top-12 md:top-13 sm:top-14` } >
                                <div className="">
                                    <div className="flex flex-row items-center">
                                        <div className="">
                                            <img className="rounded-full h-6 w-6" src={session.user.image ? session.user.image : "/f.png"} width={40} height={40} layout="fixed" alt="" />
                                        </div>
                                        <div className="px-1 flex flex-col text-xs justify-center">
                                            <h1 className="font-bold top-1">{session.user.name}</h1>
                                            <h1 className="text-gray-500">{session.user.email}</h1>
                                        </div>
                                    </div>
                                
                                    <h1 className="p-2 md:text-sm text-right hover:text-yellow-600 cursor-pointer md:font-medium text-xs" onClick={signOut}>Sign Out</h1>
                                </div>
                            </div>
                </div>
             
            </div>
         

        </div>
    )
}

export default Header
