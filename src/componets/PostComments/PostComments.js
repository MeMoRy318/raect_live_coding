import React, {Component} from "react";
import {commentService} from "../../service/commentService";
import {Comment} from "../Comment/Comment";

class PostComments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }

   async componentDidMount() {
        const {data:comments} = await commentService.getById(this.props.id)
       this.setState({comments})
    }
   async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id){
            const {data:comments} = await commentService.getById(this.props.id)
            this.setState({comments})
        }
    }
    render() {
        const {comments} = this.state
        console.log(comments)
        return(
            <div>
                {
                    [...comments].map(value => <Comment comment={value} key={value.id}/>)
                }
            </div>
        )
    }
}

export { PostComments }
