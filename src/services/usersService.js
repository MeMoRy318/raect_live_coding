import { axiosService } from "./axiosService";
import { usersUrls } from "../configs";

const usersService = {
    getAllUsers: () => axiosService.get( usersUrls.getAllUsers )
}

export { usersService };
