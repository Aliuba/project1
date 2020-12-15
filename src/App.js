import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import PostsComponent from "./component/all-posts/PostsComponent";
import UsersComponent from "./component/all-users/UsersComponent";
import CommentsComponent from "./component/all-comments/CommentsComponent";
import './App.css'

class App extends Component {
    render() {
        return (

            <div>
                <ul>
                    <li>
                        <NavLink to={'/users'}>users</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/posts'}>posts</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/comments'}>comments</NavLink>
                    </li>
                </ul>

                <div className={'app-route'}>
                    <Switch>
                        <Route path={'/users'} component={UsersComponent}/>
                        <Route path={'/posts'} component={PostsComponent}/>
                        <Route path={'/comments'} component={CommentsComponent}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
