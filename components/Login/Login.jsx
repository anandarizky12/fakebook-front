import {signIn} from  'next-auth/client';

function Login() {
    return (
        <div className="flex justify-center h-screen  w-full items-center flex-col ">
            <img 
            src="/f.png"
            height="100"
            width="100" 
            />
            <signIn/>
            <h1 
            onClick={()=>signIn('google')} 
            className=" p-3 rounded-full bg-red-600 text-white w-48 text-center  font-bold mt-20 hover:bg-gray-2   00 cursor-pointer">Login With Google</h1>
                     <h1 
            onClick={()=>signIn('facebook')} 
            className=" p-3 rounded-full text-white bg-blue-600 min-w-min w-48 text-center  font-bold mt-2 hover:bg-gray-2   00 cursor-pointer">Login With Facebook</h1>    
        </div>
    )
}

export default Login
