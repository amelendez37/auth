export const authUser = (user) => {
  return {
    type: 'AUTH_USER',
    payload: {
      username: user
    }
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    payload: {
      username: null
    }
  }
};