import React from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";

function Blogs() {
  const { posts, loading } = useContext(AppContext);
  return <div className="text-md md:w-[650px] w-11/12 ">
    {loading ? (<Spinner></Spinner>) : 
  (
    posts.length === 0 ? <div>No posts Found</div> : posts.map((post)=>{
        return (
            <div key={post.id} className="my-5">
                <p className="font-bold mb-2 text-lg sm:text-xl text-black-500">{post.title}</p>
                <p className="text-sm">By <span className="italic text-sm">{post.author}</span> On <span className="font-semibold text-sm underline italic cursor-pointer">{post.category}</span></p>
                <p className="text-sm">Posted on <span className="underline text-sm">{post.date}</span></p>
                <p className="my-2 ">{post.content}</p>
                <div>{post.tags.map((tag,index)=><span className="text-blue-600" key={index}>{` #${tag} `}</span>)}</div>
            </div>
        )
    })
  )
  }</div>;
}

export default Blogs;
 