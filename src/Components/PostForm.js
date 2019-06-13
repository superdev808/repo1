import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../redux/actions/actions.post'

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const { actions } = this.props
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }

        /*        this.props.dispatch({
                    type: 'ADD_POST',
                    data
                })*/
        //console.log(">>", actions)
        actions.postAppend(data)
        this.getTitle.value = ''
        this.getMessage.value = ''
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(postActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);