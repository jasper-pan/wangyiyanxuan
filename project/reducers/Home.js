import {ROLE} from '../actions/index.js'
import { NAVIGATE,REQUEST,SUCCESS,FAILURE } from '../constants/BaseAction'
import createReducer from '../common/reducersUtil'
import { fromJS } from 'immutable'

const roleListPageReducer = createReducer(fromJS({
    roleListData : [],
    data:"lkdslkfdsl",
    loading : false,
}), {
    // [ROLE.QUERY_LIST.REQUEST]: (state, action) => state.set('loading', true) ,
    // [ROLE.QUERY_LIST.SUCCESS]: (state, action) => state.set('roleListData', action.data).set('loading',false),
    // [ROLE.QUERY_LIST.FAILURE]: (state, action) => state.set('error', action.error).set('loading',false),

    // [ROLE.DEL_BY_ID.REQUEST]: (state, action) => state.set('loading', true),
    // [ROLE.DEL_BY_ID.SUCCESS]: (state, action) => state.set('loading',false),
    // [ROLE.DEL_BY_ID.FAILURE]: (state, action) => state.set('loading',false),

    [ROLE]: (state, action) => state.set('loading', true),

})

 

export default roleListPageReducer;