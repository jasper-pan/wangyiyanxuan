const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

//createRequestTypes('USER')
//返回值 ： {REQUEST:'USER_REQUEST',SUCCESS:'USER_SUCCESS',FAILURE:'USER_FAILURE'}
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const NAVIGATE ="NAVIGATE"
export const ROLE =createRequestTypes('ROLE')
export const START =createRequestTypes('START')
export const STOP = createRequestTypes('STOP')
export const RESET = createRequestTypes('RESET')
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = createRequestTypes('LOGOUT');
export const ADDUSER =createRequestTypes('ADDUSER')
 
 
