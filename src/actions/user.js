export function signin(username, password, data) {
  return {
    type: "USER_SIGNIN",
    payload: {
      username,
      password,
      data
    }
  };
}

export function signup(username, password, data) {
  return {
    type: "USER_SIGNUP",
    payload: {
      username,
      password,
      data
    }
  };
}

export function logout() {
  return {
    type: "USER_LOGOUT"
  };
}
