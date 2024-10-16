import React, {useContext, useEffect, useState} from 'react'
import Post from './Post'
import { PostList as PostData } from '../Stores/Post-List-Store'
import WelcomeMsg from './WelcomeMsg';
import Spineer from './Spineer';
const PostList = () => {
  const {postList,addPostFromServer}=useContext(PostData);
  
  const [spineer,setspinner]=useState(false);
  useEffect(()=>
  {
    setspinner(true);
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => 
    {
      addPostFromServer(data.posts);
      setspinner(false);
    }
    );
  },[])
  return (
  <>
    {spineer && <Spineer/>}
    {!spineer && postList.length==0 && <WelcomeMsg/>}
    {!spineer && postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export default PostList;


