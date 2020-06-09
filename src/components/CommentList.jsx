import React from 'react'
import Comment from "./Comment"

class CommentList extends React.Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool.herokuapp.com/api/comments', {
                headers: {
                    "Authorization": "Basic " + btoa("user6:4SdE6yRXfXAUHrKM"),
                    "Content-type": "application/json"
                }
            })
            let fetchedComments = await response.json()

            this.setState({
                comments: fetchedComments
            })
            console.log(fetchedComments)
        } catch (err) {
            console.log('error', err)
        }
    }

    render() {
        return (<div>
            <h1>Comments</h1>
            {this.state.comments.map(comment => <Comment items={comment} />)}
        </div>)
    }
}

export default CommentList