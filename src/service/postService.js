import {apiJsonPlHService} from "./apiJsonPlHService";
import {urls} from "../constans/urls";

const postService = {
    getAll: () => apiJsonPlHService.get(urls.jsonPlH.posts.base)
}

export { postService }
