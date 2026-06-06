import { combineReducers } from "redux";
import postReducer from "./reduce-allPost.js";
import selectedPost from "./reduce-selectedPost.js";

const rootReducer = combineReducers({
    allPosts: postReducer,
    selectedPost: selectedPost
});

export default rootReducer;