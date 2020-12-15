import React, {Component} from 'react';
import{ withRouter,	Link} from 'react-router-dom';
class UserComponent extends Component {

    render() {
        let {item, klas, SelectUser, match: {url}, onClick}=this.props
        return (
            <div>
                <div className={klas}>
                    {item.id}--{item.name}--
                    {
                        !onClick && <button
                            onClick={()=>SelectUser(item.id)}
                        >chose me</button>
                    }
                </div>
                {onClick && <Link to={`${url}/${item.id}`}> details</Link>}
            </div>
        );
    }
}

export default withRouter(UserComponent);
