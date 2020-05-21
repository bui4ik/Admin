import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logInRequest } from '../../../store/auth/actions'

const useLoginForm = () => {
  const dispatch = useDispatch()

  const logIn = useCallback(
    (username, password, remember) => dispatch(logInRequest(username, password, remember)),
    [dispatch],
  )
  return [logIn]
}

export default useLoginForm
