import {fetchService} from "./fetchService";
import {userUrls} from "../configs";

const usersService = {
    postUser: (user) => fetchService.post(userUrls.postUser,user),
    getAllUsers: () => fetchService.get(userUrls.getAllUsers)
}

export { usersService }
