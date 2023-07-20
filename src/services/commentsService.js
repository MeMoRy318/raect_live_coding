import {instanceAxios} from "./axiosService";

const commentsEndpoint = {
    comments: "/comments",
    commentsId : (id) => `/comments/${id}`
}
export const commentsService = {
    getAllComments : () => instanceAxios.get(commentsEndpoint.comments),
    getCommentsId : (id) => instanceAxios.get(commentsEndpoint.comments(id))
}
