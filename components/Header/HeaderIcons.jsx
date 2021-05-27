import { useRouter } from 'next/router'

function HeaderIcons({Icon,url}) {
    const router = useRouter()
    return (
        <div className="group cursor-pointer   md:px-5 sm:h-14   flex items-center active:bg-gray-200 rounded-md ">
            <Icon onClick={() => router.replace(url)}  className="h-5 transform text-gray-400 sm:h-6 mx-auto group-hover:text-yellow-500"/>
        </div>
    )
}

export default HeaderIcons
