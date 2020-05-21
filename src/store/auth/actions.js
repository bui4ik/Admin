export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

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
