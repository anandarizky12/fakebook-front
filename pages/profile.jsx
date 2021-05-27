
import {getSession} from 'next-auth/client';
import { useSelector ,useDispatch} from 'react-redux';
import Post from '../components/Feed/Posts/post/Post';
import Header from '../components/Header/Header';
import { getPosts } from '../actions/index';

import React, { useState, useEffect } from 'react';


function Profile({session}) {

    const posts = useSelector((state) => state.posts);
    console.log(posts,"dsjdksjdokahfohdo");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    return (
    <>
        <Header session={session}/>
        <div className="flex flex-col  w-full justify-center items-center">
         
            <div className="flex flex-col w-full items-center bg-gray-200 p-10 shadow-md">

                    <img src={session.user.image} className=" rounded-full" />
                    <h1>{session.user.name}</h1>
                    <h1>{session.user.email}</h1>

            </div>
            {posts ?    
            <div className="w-96 p-3">
            <h1 className="font-bold">Your Posts</h1>
            {posts.filter(post =>(session.user.email == post.email)).map((f)=>(
                    <Post session={session} post={f}/>
             ))}
            </div> 
        :
        <h1>loading ...</h1>    
        }
        
        </div>

    </>
    )
}

export default Profile
export async function getServerSideProps(context) {
    const session =await getSession(context)
    return {
      props:{
        session
      }
    }
  
  }