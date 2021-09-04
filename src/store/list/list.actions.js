import { MOVE_START, MOVE_END, IDENT_LEFT, IDENT_RIGHT, ADD, REMOVE, RESET_LIST, SET_LIST } from './list.actionType';

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

export const resetList = () => {
    return { type: RESET_LIST };
}

export const setList = (payload) => {
    if (isValid(payload)) {
        return { type: SET_LIST, payload: payload };
    }
    else {
        alert("can't read this json format");
        return { type: 'defaultList' };
    }
}

function isValid(obj) {
    if (Object.prototype.toString.call(obj) == '[object Object]') {
        Object.keys(obj).forEach(chapter => {
            //checking if every chapter is object
            if (Object.prototype.toString.call(chapter) == '[object Object]') {
                Object.keys(chapter).forEach(unit => {
                    //checking if every unit is array
                    if (Object.prototype.toString.call(unit) == '[object Array]') {
                        unit.forEach(topic => {
                            //checking if every topic is string
                            if (typeof topic !== 'string') {
                                return false;
                            }
                        });
                    }
                    else {
                        return false;
                    }
                });
            }
            else {
                return false;
            }
        });
        return true;
    }
    else {
        return false;
    }
}