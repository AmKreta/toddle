import { MOVE_START, MOVE_END, IDENT_LEFT, IDENT_RIGHT, ADD, REMOVE } from './list.actionType';

export const moveStart = (payload) => {
    return { type: MOVE_START, payload };
}

export const moveEnd = (payload) => {
    return { type: MOVE_END, payload };
}

export const identLeft = ({ type, name, parentUnit, parentChapter }) => {
    return {
        type: IDENT_LEFT,
        payload: {
            type,
            name,
            parentUnit,
            parentChapter
        }
    };
}

export const identRight = ({ type, name, parentUnit, parentChapter }) => {
    return {
        type: IDENT_RIGHT,
        payload: {
            type,
            name,
            parentUnit,
            parentChapter
        }
    };
}

export const add = ({ type = 'chapter', name, parentUnit, parentChapter }) => {
    return {
        type: ADD,
        payload: {
            type,
            name,
            parentUnit,
            parentChapter
        }
    };
}


export const remove = ({ type, name, parentUnit, parentChapter }) => {
    return {
        type: REMOVE,
        payload: {
            type,
            name,
            parentUnit,
            parentChapter
        }
    };
}