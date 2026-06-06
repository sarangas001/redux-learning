#  Using Redux simple app

## Step 01 - install the all the dependencies

```sh
    npm i redux react-redux redux-thunk axios
```

## Step 02 - Create actions

1. Create action folder with <realatedName>Acton.js (postAction.js)

 ```js
    import { FETCH_BUTTON_CLICKED } from "./types";

    //  action creator
    export const fetchPosts = () => {
        return {
            // action object
            type: FETCH_BUTTON_CLICKED,
            payload: [
                { id: 1, title: 'Post 1', userId: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { id: 2, title: 'Post 2', userId: 1, body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { id: 3, title: 'Post 3', userId: 2, body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
            ]
        }
    }; 
```

2. Then added to action where this action occurs

```js
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
```

## Step 3 - Then create the reducer

1. need to create reducer specifc function

```js

    import { FETCH_BUTTON_CLICKED } from "../actions/types";


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

```

2. then create root reducer named -> index,js

```js

    // Root reducer
    import { combineReducers } from 'redux';
    import postReducer from './reducer-Allpost.js';

    const rootReducer = combineReducers({
        allPosts: postReducer
    })

    export default rootReducer;

```

## Step 4 - Then create the store

```js

    import {createStore, applyMiddleware, compose} from 'redux';
    import {thunk} from 'redux-thunk';
    import rootReducer from './reducers/index.js';
    const middleware = [thunk];
    const initialState = {};

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

    export default store;

```

## Step 5 - setup the provider in main.jsx

```js 

    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './components/App'
    import {Provider} from 'react-redux'
    import store from './store.js'

    createRoot(document.getElementById('root')).render(
        <Provider store={store}>
        <App />
        </Provider>
    )

```
## Step 6 - Show the data using another components

*In Another components*

```js 

    import React from 'react'
    import {connect} from 'react-redux'

    const PostList = (props) => {

        const createListItems = () => {
            return props.allPosts.map((post) => {
                return (
                    <li key={post.id}>{post.title}</li>
                )
            })
        }
        if(!props.allPosts) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul>
                    {createListItems()}
                </ul>
            </div>
        )
    }

    const  mapStateToProps = (state) => {
        return {
            allPosts: state.allPosts
        }
    }

    export default connect(mapStateToProps)(PostList)


```

*Then can see the how actually work.Also need to see the redux dev Tool.*

