
import {useSession} from 'next-auth/client'
import Sidebarrow from "./Sidebarrow";

function Sidebar() {
    const [session,loading]=useSession();

    return (
        <div className="p-2 max-w-[600px] xl:min-w-[00px] ">
            <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer text-gray-500">
                <img className="h-6 rounded-full" src={session.user.image}/>
                <h1 className="hidden sm:inline-flex font-medium text-gray-700">{session.user.name}</h1>
            </div>
            <Sidebarrow/>
        </div>
    )
}

export default Sidebar
