import {signIn} from  'next-auth/client';

function Login() {
    return (
        <div className="flex justify-center h-screen bg-gray-200 w-full items-center flex-col ">
            <p className="text-yellow-500 p-10">Welcome To FakeBook</p>
            <img 
            src="/f.png"
            height="100"
            width="100" 
            />
            <signIn/>
            <h1 
            onClick={()=>signIn('google')} 
            className=" px-3 py-2 rounded-full bg-red-600 text-white text-xs md:text-base  w-40 md:w-48 w-38 text-center  text-gray-100 mt-20 hover:bg-gray-2   00 cursor-pointer">Login With Google</h1>
                     <h1 
            onClick={()=>signIn('facebook')} 
            className=" px-0 py-2 rounded-full text-white bg-blue-600  text-xs md:text-base  md:w-48  w-40 text-center  text-gray-100 mt-2 hover:bg-gray-2   00 cursor-pointer">Login With Facebook</h1>    
        
        <p className="text-xs absolute bottom-0 right-2 text-yellow-500">V.0.1 2021(BETA)</p>
        </div>
    )
}

export default Login
