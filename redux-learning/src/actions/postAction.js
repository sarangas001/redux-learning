import { FETCH_BUTTON_CLICKED, POST_SELECTED } from "./types";
import axios from "axios";

//  action creator
// export const fetchPosts = () => {
//     return {
//         // action object
//         type: FETCH_BUTTON_CLICKED,
//         payload: [
//             { id: 1, title: 'Post 1', userId: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//             { id: 2, title: 'Post 2', userId: 1, body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//             { id: 3, title: 'Post 3', userId: 2, body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
//         ]
//     }
// }; 

export const fetchPosts=() =>   (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_ limit=5')
        .then((response) => {
            dispatch({
                type: FETCH_BUTTON_CLICKED,
                payload: response.data
            });
    });
}

export const selectPost = (post) => {
    return {
        type: POST_SELECTED,
        payload: post
    }
}