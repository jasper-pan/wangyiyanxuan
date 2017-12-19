import { createStore, applyMiddleware ,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'
import Sagas from '../saga/index'
import getReducers from '../reducers/index'
 
 
export default function configureStore(navReducer) {
  // 注意：redux@>=3.1.0 的版本才支持把 middleware 作为 createStore 方法的最后一个参数
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
        getReducers(navReducer),
        compose (
            applyMiddleware( sagaMiddleware ,createLogger())
        )
    )

    sagaMiddleware.run(Sagas);
    
    return store;
}