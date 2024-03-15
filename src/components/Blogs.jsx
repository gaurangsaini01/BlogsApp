import React from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";

function Blogs() {
  const { posts, loading } = useContext(AppContext);
  return <div className="w-1/2 ">
    {loading ? (<Spinner></Spinner>) : 
  (
    posts.length === 0 ? <div>No posts Found</div> : posts.map((post)=>{
        return (
            <div key={post.id} className="my-5">
                <p className="font-bold text-blue-500">{post.title}</p>
                <p>By <span>{post.author}</span> On <span>{post.category}</span></p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>{post.tags.map((tag,index)=><span key={index}>{`#${tag}`}</span>)}</div>
            </div>
        )
    })
  )
  }</div>;
}

export default Blogs;
 