import React, {useState} from 'react';
import {RegisterForm} from "../../components/RegisterForm/RegisterForm";
import {usersService} from "../../services/usersService";

const PageRegisterForm = () => {
    const [formValue,setFormValue] = useState({
        name: '',
        username: '',
        email: ''
    })
    const handelSubmit = async (e) => {
        e.preventDefault()
        // console.log("FORM", e.target)
        // const formData = new FormData(e.target);
        // console.log(Object.fromEntries([...formData.entries()]))
        // console.log([...formData.keys()]);
        // console.log([...formData.values()]);
        // const response = await fetch("https://jsonplaceholder.typicode.com/users/", {
        //
        // })
        const response = await usersService.postUser(formValue)
        // const response = await usersService.postUser(formValue)
    };

    const changeHandelForm = (e,key) => {
        e.preventDefault();

        const target = e.target
        setFormValue(prew => ({...prew, [key]: target.value}))
    }
    return (
        <div>
            <RegisterForm changeHandelForm={changeHandelForm} handelSubmit={handelSubmit}/>
        </div>
    );
};

export {PageRegisterForm};
