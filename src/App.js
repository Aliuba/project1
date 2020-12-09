import React, {Component} from 'react';

import PostsComponent from "./component/all-posts/PostsComponent";

class App extends Component {
    render() {
        return (
            <div>
              <PostsComponent/>
            </div>
        );
    }
}

export default App;