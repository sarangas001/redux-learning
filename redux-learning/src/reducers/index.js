// Root reducer
import { combineReducers } from 'redux';
import postReducer from './reducer-Allpost.js';
import selectedPostReducer from './reducer-selectedPost.js';

const rootReducer = combineReducers({
    allPosts: postReducer,
    selectedPost: selectedPostReducer
})

export default rootReducer;