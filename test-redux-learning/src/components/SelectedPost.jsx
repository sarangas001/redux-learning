import React from 'react'
import { connect } from 'react-redux'

const SelectedPost = ({post}) => {
    if(!post) {
        return <div>Click on a post to see details</div>
    }
  return (
    <div>
        <h1>ID : {post.id}</h1>
      <h2>Title: {post.title}</h2>
      <p>Details: {post.body}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        post: state.selectedPost 
    }
}

export default connect(mapStateToProps)(SelectedPost)