import {detailActionTypes} from './detail.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}
const detailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case detailActionTypes.EMAIL:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        default:
            return state
    }
}
export default detailReducer