import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class PostsComponent extends Component {
    state={posts:[], chosen:null}
    Select=(id)=>{
        let {posts}=this.state
            let found=posts.find(value=>value.id===id)
            this.setState({chosen:found})}
    render() {
        let {posts, chosen}=this.state
        return (
            <div>
                {posts.map(post=><PostComponent item={post} key={post.id} Select={this.Select}/>)}
                {chosen && <PostComponent item={chosen} isVisible={true}/>}
            </div>
        );
    }
    componentDidMount() {fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value=>value.json())
        .then(json=> this.setState({posts: json}))
    }
}

export default PostsComponent;