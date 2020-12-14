import React, {Component} from 'react';
import "../user/userStyle.css"
import UserComponent from "../user/UserComponent";
import {UserService} from   "../../Services/userService"

class UsersComponent extends Component {
       state={users:[], chosen:null}
    UserService= new UserService()
    SelectUser=(id)=>{
        this.UserService.getUserById(id).then(value => this.setState({chosen:value}))}
    render() {
        let {users, chosen}=this.state
        return (

            <div>
                {users.map(value=> {
                    let klasX = value.id % 2 ? "even" : "odd";
                    return <UserComponent item={value} key={value.id} klas={klasX} SelectUser={this.SelectUser}/>
                })}
                    {chosen&&<UserComponent item={chosen} onClick={true}/>}

            </div>
        );
    }
    componentDidMount() {
           this.UserService.getAllUsers().then(value => this.setState({users:value}))
    }
}

export default UsersComponent;