import React from 'react';
import {UserDetalis} from "../UserDetails/UserDetalis";
import {UserAddress} from "../UserAddress/UserAddress";
import {Company} from "../Company/Company";

const User = ({user}) => {
    const {address,company,...rest} = user;
    return (
        <li>
            <UserDetalis userInfo={rest}/>
            <div>
                <UserAddress address={address}/>
                <Company company={company}/>
            </div>

        </li>
    );
}

export  { User };
