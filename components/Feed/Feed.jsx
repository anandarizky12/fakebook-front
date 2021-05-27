import Stories from "./Stories/Stories";
import Inputbox from "./Inputbox/Inputbox";
import Post from "./Posts/Posts";
function Feed({session}) {

   
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto select-none">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories/>
                <Inputbox session={session}/>
                <Post session={session}/>
            </div>
        </div>
    )
}

export default Feed
