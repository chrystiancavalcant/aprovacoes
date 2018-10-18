import { takeLatest, all, put } from 'redux-saga/effects'

import { auth, login/*, destroyAuth*/ } from './auth'
import ActionCreators from '../actionCreators'
import { Types } from '../actionCreators'


export default function* rootSaga() {
    yield all([

        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.SIGNIN_REQUEST, login),
        //takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

        put(ActionCreators.authRequest())
    ])
}
