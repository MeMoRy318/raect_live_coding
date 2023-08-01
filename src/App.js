import React, {useRef, useState} from 'react';
// import {usePagination} from "./myCustomHook/useAutoPagination";
import {useHover} from "./myCustomHook/useHover";
import {useInput} from "./myCustomHook/useInput";
import useDebounce from "./myCustomHook/useDebounce";
import {usePagination} from "./myCustomHook/usePagination";


const App = () => {
    //const {response,isLoading,error} = useFetching(axios.get('https://jsonplaceholder.typicode.com/posts'))
   //
   // const test = useInput('')
   // let ref = useRef();
   //  const isHovering =  useHover(ref)
   //
   //  console.log(isHovering)


    // const {lastElementRef,data,error,isLoading} = usePagination('https://jsonplaceholder.typicode.com/posts',10);
    // if (error){
    //     return (<h1>Щось пішло не так</h1>)
    // }
    // if (isLoading){
    //     return (<h1>Загрузка</h1>)
    // }

    // const [value ,setValue] = useState('')
    // function search (query){
    //     fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }
    //
    // const debounce = useDebounce(search,500);

    // function change(e) {
    //     if (e.target.value){
    //         debounce(e.target.value)
    //     }
    // }


    let pagination = usePagination(77,100);
    //
    // console.log(pagination);

    return (
        <div >
            {/*<input type="text" name='search' onChange={change}/>*/}



            {/*<form>*/}
            {/*    <input {...test} type="text"/>*/}
            {/*    <button ref={ref} style={{*/}
            {/*        position:'absolute',*/}
            {/*        right: isHovering ? `${Math.random()*1000}%` : `${Math.random()*90}%`,*/}
            {/*        bottom: isHovering ? `${Math.random()*1000}%` : `${Math.random()*90}%`*/}
            {/*    }}>button не попадёшь</button>*/}
            {/*</form>*/}
            {/*{!!data?.length && [...data].map(value => {*/}
            {/*    return (*/}
            {/*        <div key={value.id}>*/}
            {/*            <li>{value.id}</li>*/}
            {/*            <li>{value.title}</li>*/}
            {/*            <li>{value.body}</li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            {/*<div ref={lastElementRef}> </div>*/}
        </div>
    );
};

export {App};


