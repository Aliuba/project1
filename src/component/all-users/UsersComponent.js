import React, {Component} from 'react';
import "../user/userStyle.css"
import UserComponent from "../user/UserComponent";
import {UserService} from   "../../Services/userService"

class UsersComponent extends Component {

    state={users:[], chosen:null}
    UserService= new UserService()

    SelectUser=(id)=>{
        this.UserService
            .getUserById(id)
            .then(chosen => this.setState({chosen}))}

    componentDidMount() {
        this.UserService
            .getAllUsers()
            .then(users => this.setState({users}))
    }

    render() {
        let {users, chosen}=this.state
        return (

            <div>
                {users.map(value=> {
                    let klasX = value.id % 2 ? "even" : "odd";
                    return <UserComponent item={value} key={value.id} klas={klasX} SelectUser={this.SelectUser}/>
                })}
                    {chosen && <UserComponent item={chosen} onClick={true}/>}
            </div>
        );
    }

}

export default UsersComponent;
