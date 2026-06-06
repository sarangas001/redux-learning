import { FETCH_BUTTON_CLICKED, POST_SELECTED } from "./types"
import axios from "axios";

const getPostfromAPI = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if(!response.data) {
        return null;
    }
    console.log(response.data);
    return response.data;
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const posts = await getPostfromAPI();
        dispatch({
            type: FETCH_BUTTON_CLICKED,
            payload: posts
        })
    }
};

export const selectedPost = (post) => {
    return {
        type: POST_SELECTED,
        payload: post
    }
}