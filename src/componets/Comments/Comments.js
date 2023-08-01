import React, {Component} from 'react'
import {postService} from "../../service/postService";
import {commentService} from "../../service/commentService";
import {Comment} from "../Comment/Comment";
export class Comments  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    async componentDidMount() {
        try {
            const { data: comments } = await commentService.getAll();
            this.setState({ comments });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {comments} = this.state

        return (
            <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                <h3>Comments</h3>
                <ul>
                    {
                        !!comments?.length
                            ? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                            : <div>not comments</div>
                    }
                </ul>
            </div>
        )
    }
}
