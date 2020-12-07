import React, {Component} from 'react';
import "./userStyle.css"
class UsersComponent extends Component {
    render() {
        let {item, klas}=this.props
        return (
            <div>
                <div className={klas}>{item.name}-{item.id}-
                    {item.age}-{item.status.toString()}-
                    {item.address.city}-{item.address.street}-{item.address.number}</div>
            </div>
        );
    }
}

export default UsersComponent;