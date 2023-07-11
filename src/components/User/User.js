import React, {useContext} from 'react';
import {UserDetalis} from "../UserDetails/UserDetalis";
import {UserAddress} from "../UserAddress/UserAddress";
import {Company} from "../Company/Company";
import {MyButton} from "../../Hok/MyButton";
import {UsersContext} from "../../Hok/UsersContext";

const User = ({user}) => {
    const { setPostId } = useContext(UsersContext)

    const {address,company,...rest} = user;
    return (
        <li>
            <UserDetalis userInfo={rest}/>
            <div>
                <UserAddress address={address}/>
                <Company company={company}/>
            </div>
            <MyButton fn={() => setPostId(rest.id)}>
                Show Posts
            </MyButton>
            {/*<button onClick={() => setPostId(rest.id)}> Show Posts </button>*/}
        </li>
    );
}

export  { User };
