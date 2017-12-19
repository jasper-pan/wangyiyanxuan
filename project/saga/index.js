import {take, put, call, fork, select, race, cancel,all } from 'redux-saga/effects'
import { LOGIN , LOGOUT ,ADDUSER,NAVIGATE} from '../constants/ActionsTypes'
import action from '../constants/BaseAction'
 



export function* logout() {
  while (true) {
    const { str } = yield take(LOGOUT.REQUEST)
     
      yield put(action(LOGOUT.SUCCESS))
 
}
}


 


export default function * root() {
    yield * [
      fork(logout)
 
    ]
}
