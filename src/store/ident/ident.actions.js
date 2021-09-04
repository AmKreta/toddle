import { INC_IDENET_LEVEL, DEC_IDENT_LEVEL, RESET_IDENT_LEVEL } from "./ident.actionTypes";

export const increaseIdentLevel = () => {
    return { type: INC_IDENET_LEVEL };
}

export const decreaseIdentLevel = () => {
    return { type: DEC_IDENT_LEVEL };
}

export const resetIdentLevel = () => {
    return { type: RESET_IDENT_LEVEL };
}