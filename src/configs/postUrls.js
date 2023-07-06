 export const postUrls = {
    getAllPosts:'/posts',
    getPostById:(id) => `${this.getAllPosts}/${id}`
}
