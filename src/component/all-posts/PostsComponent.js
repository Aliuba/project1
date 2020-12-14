import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import {PostService} from "../../Services/postService";

class PostsComponent extends Component {
    state={posts:[], chosen:null}
    PostService= new PostService()
    Select=(id)=>{
        this.PostService.getPostById(id).then(value => this.setState({chosen:value}))}
    render() {
        let {posts, chosen}=this.state
        return (
            <div>
                {posts.map(post=><PostComponent item={post} key={post.id} Select={this.Select}/>)}
                {chosen && <PostComponent item={chosen} isVisible={true}/>}
            </div>
        );
    }
    componentDidMount() {
        this.PostService.getAllPost().then(value => this.setState({posts: value}))
    }
}

export default PostsComponent;