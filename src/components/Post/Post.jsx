import React, {useEffect, useState} from 'react';
import {RequestServer} from "../../services";
import {PostInfo} from "./PostInfo";

const requestServer = new RequestServer();
export const Post = (props) => {
    const {id, title, body: text} = props.post

    const [postInfo, setPostInfo] = useState(false)

    const helperGetPostInfo = async (id) =>{
        const {data} = await requestServer.getPost(id);
        console.log("PostInfo data", data)
        setPostInfo(data)

    }

    // useEffect(() => {
    //     (async () => {
    //         const {data} = await requestServer.getPost(id);
    //
    //         console.log("PostInfo data", data)
    //         setPostInfo(data)
    //     })()
    // }, [])

    const helperClosePostInfo = () => setPostInfo(false)


    return (
        <li>
            <h3>ID: {id}, Title: {title}</h3>
            <p>{text}</p>
            <button onClick={()=> helperGetPostInfo(id)}> show Post Info</button>
            <button onClick={()=> helperClosePostInfo()}> delete Post Info</button>
            {/*<button onClick={()=> setPostInfo(prew => console.log("PREW",prew))}> delete Post Info</button>*/}
            <div style={{
                border: "1px solid black"
            }}>
                {!!postInfo && <PostInfo postInfo={{...postInfo}}/>}
            </div>
        </li>
    );
};

