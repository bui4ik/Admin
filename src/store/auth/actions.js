export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const logInRequest = (username, password, remember) => ({
  type: LOG_IN_REQUEST,
  payload: { username, password, remember },
})

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS,
})

export const logInFailure = (error) => ({
  type: LOG_IN_FAILURE,
  payload: { error },
})

export const registerRequest = (username, name, password) => ({
  type: REGISTER_REQUEST,
  payload: { username, name, password },
})

export const registerSuccess = () => ({
  type: REGISTER_FAILURE,
})

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: { error },
})
