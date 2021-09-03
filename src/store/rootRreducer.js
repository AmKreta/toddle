import { combineReducers } from 'redux';
import ListReducer from './list/list.reducer';
import identReducer from './ident/ident.reducer';
import currentContainerReducer from './currentContainer/currentContainer.reducer';

const rootReducer = combineReducers({
    list: ListReducer,
    ident: identReducer,
    currentContainer: currentContainerReducer
});

export default rootReducer;