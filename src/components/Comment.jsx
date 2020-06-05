import React from 'react';
import { ListGroup } from 'react-bootstrap'

class Comment extends React.Component {

    render() {
        return (
            <div>
                {this.props.items.comment} | { this.props.items.rate} | {this.props.items.elementID}
            </div>
        )
    }
}



export default Comment