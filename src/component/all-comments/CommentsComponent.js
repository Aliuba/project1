import React, {Component} from 'react';
import {CommentService} from "../../Services/commentservice";
import CommentComponent from "../comments/CommentComponent";
import "../comments/commentsStyle.css"

class CommentsComponent extends Component {
    CommentService = new CommentService();
    state = {comments: [], chose: null}
       onChose = (id) => {
        this.CommentService.getCommentById(id).then(value => this.setState({chose: value}))
    }

    render() {
        let {comments, chose} = this.state;
        return (
            <div>
                {comments.map(comment => <CommentComponent item={comment} key={comment.id} klas={"klas"} onChose={this.onChose}/>)}
                <div className={"chosenComment"}>{chose && <CommentComponent item={chose} isVisible={true}/>}</div>
            </div>
        );
    }

    componentDidMount() {
        this.CommentService.getAllComents().then(value => value.filter(value => value.id < 50))
            .then(value => this.setState({comments: value}))
    }
}

export default CommentsComponent;