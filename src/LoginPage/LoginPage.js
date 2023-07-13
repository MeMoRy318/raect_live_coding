// import React, {useState} from 'react';
//
// const LoginPage = () => {
//
//     const [formValue,setFormValue] = useState({
//         email: '',
//         password: ''
//     })
//     function handelSubmit(e) {
//         e.preventDefault()
//     }
//
//     function handelChangeSubmit(e,key) {
//         e.preventDefault()
//         setFormValue(prew => ({...prew, [key]:e.target.value}))
//     }
//
//     return (
//         <form onSubmit={handelSubmit}>
//             <label>
//                 email
//                 <input type="text"  onChange={(e)=>handelChangeSubmit(e,'email')}/>
//             </label>
//             <br/>
//             <label>
//                 password
//                 <input type="password" onChange={(e)=>handelChangeSubmit(e,'password')}/>
//             </label>
//             <br/>
//             <button type='submit'>submit</button>
//         </form>
//     );
// };
//
// export {LoginPage};


import React, {useEffect, useRef, useState} from 'react';

const LoginPage = () => {

    let emailRef = useRef()

    let passwordRef = useRef();


    // useEffect(()=>{
    //
    //     console.log(emailRef?.current?.value)
    //     console.log(passwordRef.current?.value)
    // },[emailRef.current?.value,passwordRef.current?.value])
    function handelSubmit(e) {
        e.preventDefault()
        console.log(emailRef?.current?.value)
        console.log(passwordRef.current?.value)
    }


    return (
        <form onSubmit={handelSubmit}>
            <label>
                email
                <input type="text"  ref={emailRef}/>
            </label>
            <br/>
            <label>
                password
                <input type="password" ref={passwordRef}/>
            </label>
            <br/>
            <button type='submit'>submit</button>
        </form>
    );
};

export {LoginPage};
