import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {selectedPost} from "../actions/postAction.js"

const PostList = ({allPosts, selectedPost}) => {

    const createListItems = () => {
        return allPosts.map((post) => {
            return <li key={post.id} onClick={() => selectedPost(post)}>{post.title}</li>
        })
    }
    if(!allPosts) 
        return <div>Click the button to fetch posts</div>
  return (
    <div>
        <ul>
            {createListItems()}
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectedPost}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList)