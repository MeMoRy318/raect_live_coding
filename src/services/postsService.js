import {instanceAxios} from "./axiosService";

const postsEndpoint = {
    posts: "/posts",
    postsId : (id) => `/posts/${id}`
}
export const postsService = {
    getAllPosts : () => instanceAxios.get(postsEndpoint.posts),
    getPostsId : (id) => instanceAxios.get(postsEndpoint.postsId(id))
}
