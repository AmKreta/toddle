import { UPDATE_PARENT_CHAPTER, UPDATE_PARENT_UNIT, UPDATE_PARENT_CONTAINER, RESET_PARENT_CONTAINER } from './currentContainer.actionTypes';

export const updateParentChapter = (name) => {
    return { type: UPDATE_PARENT_CHAPTER, payload: name };
}

export const updateParentUnit = (name) => {
    return { type: UPDATE_PARENT_UNIT, payload: name };
}

export const updateParentContainer = (parentChapter, parentUnit) => {
    return { type: UPDATE_PARENT_CONTAINER, payload: { parentChapter, parentUnit } };
}

export const resetParentContainer = () => {
    return { type: RESET_PARENT_CONTAINER };
}