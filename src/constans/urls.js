const baseURLS = {
    cars: 'http://owu.linkpc.net/carsAPI/v1/',
    jsonPlH: 'https://jsonplaceholder.typicode.com/'
}

const urls = {
    cars: {
        base: 'cars'
    },
    jsonPlH:{
      posts:{
          base: 'posts'
      },
      comments:{
          base:'comments',
          getById: (id) => `posts/${id}/comments`
      }
    }
}


export { baseURLS, urls }
