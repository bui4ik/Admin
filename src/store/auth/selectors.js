export const initialState = {
  isAuth: false,
  username: '',
  isLoading: false,
  error: {},
}

export const isAuthSelector = ({ auth }) => auth.isAuth
export const userNameSelector = ({ auth }) => auth.username
export const isLoadingSelector = ({ auth }) => auth.isLoading
export const errorSelector = ({ auth }) => auth.error
