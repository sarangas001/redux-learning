import React, { Component } from 'react'
import {fetchPosts} from '../actions/postAction.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.fetchPosts()}>Click me</button>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPosts: fetchPosts}, dispatch)
}

export default connect(null, matchDispatchToProps)(Button)