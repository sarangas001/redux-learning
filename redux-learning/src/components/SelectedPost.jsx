import React from 'react'
import { connect } from 'react-redux'

const SelectedPost = ({selectedPost}) => {

  return (

    <div>
        {
            selectedPost  ? <>
                <h3>{selectedPost.title}</h3>
                <p>{selectedPost.body}</p>
            </>  :  <h2>Selected Post</h2>
            
        }
        
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        selectedPost: state.selectedPost
    }
}

export default connect(mapStateToProps)(SelectedPost)