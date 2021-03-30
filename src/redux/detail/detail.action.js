import {detailActionTypes} from './detail.types'

export const signInSuccess = user => ({
    type: detailActionTypes.EMAIL,
    payload: user
})