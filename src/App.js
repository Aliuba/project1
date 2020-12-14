import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import PostsComponent from "./component/all-posts/PostsComponent";
import UsersComponent from "./component/all-users/UsersComponent";
import CommentsComponent from "./component/all-comments/CommentsComponent";

class App extends Component {
    render() {
        return (
            <Router>
				<div>
					<div>
						<Link to={'/users'}>users</Link>
					</div>
					<div>
						<Link to={'/posts'}>posts</Link>
					</div>
					<div>
						<Link to={'/comments'}>comments</Link>
					</div>

					<div className={'app-route'}>

						<Switch>
							<Route path={'/posts'} render={(props) => {
								console.log(props);
								return <PostsComponent/>;
							}}/>

							<Route path={'/users'} render={(props)=>{console.log(props);return <UsersComponent/>}}

							/>
							<Route path={'/comments'} render={(props)=>{console.log(props);
							return <CommentsComponent/>}}/>

						</Switch>

					</div>
				</div>
			</Router>
        );
    }
}

export default App;