export const authUser = (user) => {
  return {
    type: 'AUTH_USER',
    payload: {
      username: user,
      authorized: true
    }
  }
};

export const logoutUser = (user) => {
  return {
    type: 'LOGOUT_USER',
    payload: {
      authorized: false
    }
  }
};