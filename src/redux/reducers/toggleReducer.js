import { ActionTypes } from "../constants/action-types";

const initialState = {
    toggleState: false,
}

export const toggleReducer = (state = false, {type}) => {
    switch (type) {
        case ActionTypes.TOGGLE:
            return (!state)
        default:
            return state
    }
}