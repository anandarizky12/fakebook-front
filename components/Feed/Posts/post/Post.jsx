import React from 'react'
import {
    UsersIcon,
    DotsVerticalIcon,
}
from "@heroicons/react/outline";
import {
    ThumbUpIcon
}
from "@heroicons/react/solid";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {deletePost,likePost } from '../../../../actions/index';
import moment from 'moment';

function Post({post,session}) {
    const dispatch = useDispatch();
    const [option,setoption]=useState(false)

    const Delete=()=>{
        setoption(false)
        dispatch(deletePost(post._id))
    }
    const m=moment()
    console.log(session.user.email)
    return (
        <div key={post._id} className="md:p-5 p-2 flex flex-col justify-center md:rounded-2xl rounded bg-gray-100 mt-5 shadow-md ">
                    <div className="flex justify-between">
                        <div className="flex flex-row  items-center">
                    
                            <div className="p-2">
                                {post.profile ?  
                                <img  className="h-7  rounded-full bg-gray-200" src={`${post.profile}`}/>
                                :
                                <UsersIcon className="h-7 rounded-full bg-gray-200 p-1"/>
                                }
                            </div>
                            <div className="text-xs md:text-base">
                                <p className="font-bold">{post.username}</p>
                                <p className="text-xs text-gray-400">{post.timestamp.slice(0,10)}</p>
                            </div>
                        
                        </div>
                     
                           <div className="relative ">
                          
                            <DotsVerticalIcon onClick={()=>setoption(!option)} className=" h-8 p-2 active:bg-gray-400 cursor-pointer rounded-full"/>
                                <div className={`${option ? 'flex' : ' hidden '} md:p-1 text-xs rounded absolute bg-gray-300 shadow-md right-2`}>
                                        {session.user.email == post.email ?
                                        <div className="">
                                            <button  onClick={() => Delete()} className="p-2 w-full focus:outline-none active:bg-gray-400">Delete</button>
                                            <button  className="p-2 w-full focus:outline-none active:bg-gray-400">Edit</button>
                                        </div>
                                        :
                                        <button className="p-2 w-full focus:outline-none active:bg-gray-400">Report</button>
                                        }
                                
                                </div>
                             </div>
                        
                        
                      
                     
                        
                    </div>
                  
          
                <p className="mx-11 py-5">{post.caption}</p>
                <div className="flex justify-center bg-black">
                    {post.image && 
                    <img className="md:h-60 h-30" src={post.image} alt="" />
                    }
                </div>
                <div className="w-full p-3 text-xs md:text-base flex">
                    <ThumbUpIcon onClick={() => dispatch(likePost(post._id))} className="md:h-6 h-4 cursor-pointer text-yellow-500"/>
                  <p className="px-2 font-bold text-yellow-500">{post.likeCount} likes</p>  
                 
                  
                </div>
             
            </div>
    )
}

export default Post
