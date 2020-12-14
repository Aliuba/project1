import React, {Component} from 'react';
import{ withRouter,	Link} from 'react-router-dom';
class PostComponent extends Component {
    render() {
        let {item, Select, isVisible,match:{url}}=this.props
        return (
            <div>
                <div>{item.title}-{item.id} </div> {!isVisible&&<button onClick={()=>Select(item.id) }>click me</button>}
                {isVisible&&<Link to={`${url}/${item.id}`}> details</Link>}
            </div>
        );
    }
}

export default withRouter(PostComponent) ;