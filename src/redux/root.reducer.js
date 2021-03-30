import { combineReducers } from 'redux'
import gameReducer from './game/game.reducer'
import detailReducer from './detail/detail.reducer'

const rootReducer = combineReducers({
    games: gameReducer,
    detail: detailReducer,
})

export default rootReducer
