import {useEffect, useState} from "react";
import {usersService} from "../services";

const useUsers = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
       usersService.getAllUsers().then(({data}) => setUsers(data))
    },[])

    return [users,setUsers]
}

export { useUsers }
