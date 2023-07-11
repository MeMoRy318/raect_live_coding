import {axiosService} from "./axiosService";
import {postUrls} from "../configs";

const postService = {
    getPostsByUserId: (id) => axiosService.get(postUrls.getPostsByUserId(id))
}

export { postService }
