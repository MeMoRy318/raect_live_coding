import {instanceAxios} from "./axiosService";

const albumsEndpoint = {
    albums: "/albums",
    albumsId : (id) => `/albums/${id}`
}
export const albumsService = {
    getAllAlbums : () => instanceAxios.get(albumsEndpoint.albums),
    getAlbumsId : (id) => instanceAxios.get(albumsEndpoint.albumsId(id))
}
