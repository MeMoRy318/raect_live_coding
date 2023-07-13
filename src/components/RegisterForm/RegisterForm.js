import React, {useState} from 'react';

const RegisterForm = ({handelSubmit,changeHandelForm}) => {
    return (
        <form onSubmit={handelSubmit}>
            <label>
                Name
                <input type="text" name="name" onChange={ (e)=> changeHandelForm(e, "name") }/>
            </label>
            <br/>
            <label>
                User name
                <input type="text" name="username" onChange={ (e)=> changeHandelForm(e,'username') }/>
            </label>
            <br/>
            <label>
                email
                <input type="text" name="email" onChange={ (e)=> changeHandelForm(e,'email') }/>
            </label>
            <button type="submit">send</button>
        </form>
    );
};

export {RegisterForm};
