import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;


// import {applyMiddleware,  legacy_createStore as createStore} from 'redux';
// import reducer from '../reducer';
// import thunk from 'redux-thunk';


// import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(reducer,
//     composeWithDevTools(applyMiddleware(thunk)));
//     //applyMiddleware(thunk));


// export default store;



// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers/rootReducer";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension"

// const store = createStore(
//     rootReducer,
    
//     composeWithDevTools(applyMiddleware(thunk)),
//   );

// export default store;
