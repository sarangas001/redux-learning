import { FETCH_BUTTON_CLICKED } from "../actions/types";

// Reducer for ALL post
export default function(state=null, action) {
    switch(action.type) {
        case FETCH_BUTTON_CLICKED:
            return action.payload;
            break;
        default:
            return state;
    }
    return state;
}