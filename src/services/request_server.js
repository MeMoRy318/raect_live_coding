
import {baseUrls} from "../configs";
import {postUrls} from "../configs";
import axios from "axios";
export function RequestServer() {
    if (typeof  RequestServer.instance === "object") {
        return RequestServer.instance
    }

    RequestServer.instance = this
}
RequestServer.getAxiosData = async function(url, method = "get") {
    try {
        const response = await axios[method](url);
        return response
    } catch (error) {
        console.log(error)
    }

}
RequestServer.prototype.getPosts = function() {
    const url =`${baseUrls}/${postUrls.getAllPosts}`;
    return RequestServer.getAxiosData(url, "get" )

}
RequestServer.prototype.getPost = function(id) {
    const url =`${baseUrls}/${postUrls.getAllPosts}/${id}`;
    return RequestServer.getAxiosData(url, "get")
}






export const axiosService = (baseURL) => axios.create({baseURL})

