import {fetchService} from "./fetchService";
import {postUrls} from "../configs/postUrls";

const postService = {
    createPost: (body) => fetchService.post(postUrls.posts,body)
}

export { postService }
