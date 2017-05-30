import {createStore} from 'redux';
import rootReducer from '../reducers';

const configureStore=(initialState)=>{
    const store=createStore(rootReducer,initialState,
        //启用redux-devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

export default configureStore;