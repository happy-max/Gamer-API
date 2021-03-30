import {gameActionTypes} from './game.types'

export const signInSuccess = user => ({
    type: gameActionTypes.EMAIL,
    payload: user
})