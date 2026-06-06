import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchPosts} from '../actions/postAction.js'

const Button = ({fetchPosts}) => {
  return (
    <button onClick={fetchPosts}>Click me</button>
  )
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, matchDispatchToProps)(Button)