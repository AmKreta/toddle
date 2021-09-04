import { UPDATE_PARENT_CHAPTER, UPDATE_PARENT_UNIT, UPDATE_PARENT_CONTAINER, RESET_PARENT_CONTAINER } from './currentContainer.actionTypes';

const initialState = {
    parentChapter: null,
    parentUnit: null
};

const currentContainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PARENT_UNIT: return { ...state, parentUnit: action.payload };
        case UPDATE_PARENT_CHAPTER: return { ...state, parentChapter: action.payload };
        case UPDATE_PARENT_CONTAINER: return { ...action.payload };
        case RESET_PARENT_CONTAINER: return initialState;
        default: return state;
    }
}

export default currentContainerReducer;