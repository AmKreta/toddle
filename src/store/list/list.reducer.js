import { MOVE_START, MOVE_END, IDENT_LEFT, IDENT_RIGHT, ADD, REMOVE } from './list.actionType';

const initialState = {};

/*will be saved as {
    chapterName:{
        unit1Name:[topic1, topic2, topic3],
        unit2name:[topic1,topic2,topic3]
    }
}*/

const addNewItem = ({ state, type, name, parentUnit, parentChapter }) => {
    if (name) {
        if (type === 'chapter') {
            return {
                ...state,
                [name]: {}
            }
        }
        else if (type === 'unit') {
            return {
                ...state,
                [parentChapter]: {
                    ...state[parentChapter],
                    [name]: []
                }
            }
        }
        else if (type === 'topic') {
            return {
                ...state,
                [parentChapter]: {
                    ...state[parentChapter],
                    [parentUnit]: [
                        ...state[parentChapter][parentUnit],
                        name
                    ]
                }
            }
        }
        else {
            return state;
        }
    }
    else {
        return state;
    }
};

const removeItem = ({ state, type, name, parentUnit, parentChapter }) => {
    if (type === 'chapter') {
        delete state[name];
        return { ...state };
    }
    else if (type === 'unit') {
        delete state[parentChapter][name];
        return { ...state };
    }
    else if (type === 'topic') {
        let index = state[parentChapter][parentUnit].findIndex(item => item === name);
        state[parentChapter][parentUnit].splice(index, 1);
        return { ...state };
    }
    else {
        return state;
    }
};

const identLeft = ({ state, type, name, parentUnit, parentChapter }) => {
    if (type === 'unit') {
        state[name] = {}; //creating a new chapter with same name as unit
        state[parentChapter][name].forEach(item => {
            state[name][item] = []; //adding each topic inside usint as unit
        });
        delete state[parentChapter][name];
        return { ...state };
    }
    else if (type === 'topic') {
        const unitIndex = state[parentChapter][parentUnit].findIndex(item => item === name);
        const topics = state[parentChapter][parentUnit].splice(unitIndex);
        topics.shift();
        state[parentChapter][name] = topics;//added this topic as unit in same chapter
        return { ...state };
    }
    else {
        return state;
    }
}

const identRight = ({ state, type, name, parentUnit, parentChapter }) => {
    if (type === 'chapter') {
        const chapterIndex = Object.keys(state).findIndex(item => item === name);
        if (chapterIndex === 0) {
            alert('first chapter cant be changed as unit');
            return state;
        }
        else {
            const prevChapter = Object.keys(state)[chapterIndex - 1];
            //new we have prevChapter and current chapter
            state[prevChapter][name] = []; //added this chapter as unit in prevChapter
            Object.keys(state[name]).forEach(unit => {
                state[prevChapter][name].push(unit); //added units as topics in prevChapter
                state[prevChapter][name].concat(state[name][unit]);//merged chapters
            });
            delete state[name];
            return { ...state };
        }
    }
    else if (type === 'unit') {
        const unitIndex = Object.keys(state[parentChapter]).findIndex(item => item === name);
        if (unitIndex === 0) {
            alert('first unit cant be changed as topic');
            return state;
        }
        else {
            const prevUnit = Object.keys(state[parentChapter])[unitIndex - 1];
            state[parentChapter][prevUnit].push(name);
            state[parentChapter][name].forEach(item => state[parentChapter][prevUnit].push(item));
            delete state[parentChapter][name];
            return { ...state };
        }
    }
    else {
        return state;
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_START:
            return state;
        case MOVE_END:
            return state;
        case IDENT_LEFT: return identLeft({ state, ...action.payload });
        case IDENT_RIGHT: return identRight({ state, ...action.payload });
        case ADD: return addNewItem({ state, ...action.payload });
        case REMOVE: return removeItem({ state, ...action.payload });
        default: return state;
    }
}

export default reducer;