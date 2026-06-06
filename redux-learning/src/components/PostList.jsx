import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectPost} from '../actions/postAction'

const PostList = (props) => {

    const createListItems = () => {
        return props.allPosts.map((post) => {
            return (
                <li key={post.id} onClick={() => props.selectPost(post)} >
                    {post.title}
                </li>
            )
        })
    }
    if(!props.allPosts) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <ul>
                {createListItems()}
            </ul>
        </div>
    )
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectPost}, dispatch)
}

const  mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList)
