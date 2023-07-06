import {axiosService} from "./request_server";
import {baseUrls, postUrls} from "../configs";

export const postsService = {
    getAllPosts: () => axiosService(baseUrls).get(postUrls.getAllPosts),
    getPostsById: (id) => axiosService(baseUrls).get(postUrls.getPostById(id))
}
