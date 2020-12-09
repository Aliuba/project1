import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, Select, isVisible}=this.props
        return (
            <div>
                {item.title}-{item.id} {!isVisible&&<button onClick={()=>Select(item.id) }>click me</button>}
            </div>
        );
    }
}

export default PostComponent;