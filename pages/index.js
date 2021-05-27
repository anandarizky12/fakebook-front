import Head from 'next/head'
import Header from '../components/Header/Header'
import {getSession} from 'next-auth/client';
import Login from '../components/Login/Login';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Link from 'next/link'
import { useSelector ,useDispatch} from 'react-redux';
import { getPosts } from '../actions/index';
  
import React, { useState, useEffect } from 'react';



export default function Home({session}) {

  

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if(!session){
   return (
    <div>
    <Head>
      <title>FakeBook</title>
    </Head>
  <Login/>

  
    </div>
   )
  }
  return (
  
    <div className="max-h-screen  overflow-hidden"> 
      <Head>
        <title>FakeBook</title>
      </Head>
        <Header session={session}/>
       
                <main className="flex">
                      <Sidebar/>
                      <Feed session={session}/>
                </main>
         
               

      
    </div>
  )
}


export async function getServerSideProps(context) {
  const session =await getSession(context)
  return {
    props:{
      session
    }
  }

}