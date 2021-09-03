import { INC_IDENET_LEVEL, DEC_IDENT_LEVEL } from "./ident.actionTypes";

const initialState = 1;

const identReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_IDENET_LEVEL: return state < 3 ? state + 1 : state;
        case DEC_IDENT_LEVEL: return state > 1 ? state - 1 : state;
        default: return state;
    }
}

export default identReducer;