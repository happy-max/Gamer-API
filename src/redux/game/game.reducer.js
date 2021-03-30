import {gameActionTypes} from './game.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}
const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case gameActionTypes.EMAIL:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        default:
            return state
    }
}
export default gameReducer