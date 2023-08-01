import React, {useEffect, useState} from 'react';
import {Comments, Posts} from "./componets";
import {Cars} from "./componets/Cars/Cars";
import {PostComments} from "./componets/PostComments/PostComments";

const App = () => {
    const [postId,setPostId] =  useState(null)



    return (
       <div>
           {!!postId && <PostComments id={postId}/>}
           <div
               style={{
                   display: "flex"
               }}
           >
               <Cars/>
               <Comments/>
               <Posts setPostId={setPostId}/>
           </div>
       </div>
    );
};

export {App};
