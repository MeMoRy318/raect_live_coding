import React, {Component} from 'react'
import {postService} from "../../service/postService";
import {Post} from "../Post/Post";



export class Posts  extends Component{
        constructor(props) {
            super(props);
            this.state = {
                posts: [],

            }
        }

    async componentDidMount() {
        try {
            const { data: posts } = await postService.getAll();
            this.setState({ posts });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
            const {posts} = this.state


            return (
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <h3>Posts</h3>
                    <ul>
                        {
                           !!posts?.length
                               ? posts.map(post => <Post key={post.id} post={post} setPostId={this.props.setPostId}/>)
                               : <div>not posts</div>
                        }
                    </ul>
                </div>
            )
        }
}

// class PostsLists extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             postId: null
//         }
//     }
//
//     handleGetcommentsByPostId = () => {
//         try {
//
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 {}
//             </>
//         )
//     }
// }
