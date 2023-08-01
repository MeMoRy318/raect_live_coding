import {apiJsonPlHService} from "./apiJsonPlHService";
import {urls} from "../constans/urls";

const commentService = {
    getAll: ()=> apiJsonPlHService.get(urls.jsonPlH.comments.base)
}

export { commentService }
