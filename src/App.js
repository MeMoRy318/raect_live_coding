import React, {useRef} from 'react';
import {useFetching} from "./myCustomHook/useFetching";
import axios from "axios";
import {useInput} from "./myCustomHook/useInput";
import {logDOM} from "@testing-library/react";
import {useHover} from "./myCustomHook/useHover";

const App = () => {
    //const {response,isLoading,error} = useFetching(axios.get('https://jsonplaceholder.typicode.com/posts'))

   const test = useInput('')
   let ref = useRef();
    const isHovering =  useHover(ref)

    console.log(isHovering)
    return (
        <div >
            <form>
                <input {...test} type="text"/>
                <button ref={ref} style={{
                    position:'absolute',
                    right: isHovering ? `${Math.random()*1000}%` : `${Math.random()*90}%`,
                    bottom: isHovering ? `${Math.random()*1000}%` : `${Math.random()*90}%`
                }}>button Хуй попадёшь</button>
            </form>
        </div>
    );
};

export {App};
