export function signin(username, password) {
  return {
    type: "USER_SIGNIN",
    payload: {
      username,
      password
    }
  };
}

export function logout() {
  return {
    type: "USER_LOGOUT",
  };
}
