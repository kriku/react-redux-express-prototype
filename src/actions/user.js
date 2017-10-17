export function signin(email, password) {
  return {
    type: "USER_SIGNIN",
    payload: {
      email,
      password
    }
  };
}
