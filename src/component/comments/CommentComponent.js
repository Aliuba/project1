import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";

class CommentComponent extends Component {
    render() {
        let{item, onChose,klas, isVisible, match:{url}}=this.props
        return (
            <div className={klas}>
                {item.name}--{item.id}-{!isVisible&&<button onClick={()=>onChose(item.id)}>chose me</button>}
                {isVisible&&<Link to={`${url}/${item.id}`}> details</Link>}
            </div>
        );
    }
}

export default withRouter(CommentComponent);