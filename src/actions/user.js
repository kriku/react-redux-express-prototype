import {
    USER_SIGNIN, USER_SIGNUP, USER_LOGOUT, USER_REGISTER_FAILED, USER_CREATE_SESSION_FAILED
} from "../Constans/User";

export function createSession(body){
    return (dispatch) => {
        const headers = new Headers({
          'Content-Type': 'application/json'
        });
        fetch(`/sessions/create`,
            {
                credentials: 'include',
                headers,
                method: 'POST',
                body: JSON.stringify(body)
            }
        ).then(
            result => {
                const {username, password} = body
                    , {data} = result;
                console.log('/session/create', result);
                if (result.status - 0 === 200) {

                    signin({ username, password, data });

                } else {
                    // signin({ username, password, data });
                    register(body, dispatch);
                    dispatch({
                        type: USER_CREATE_SESSION_FAILED,
                        error: result.statusText
                    });
                }
            }
        ).catch((error) => {
            const { response } = error;
            console.log(response);
        });
    };
}

function register(body, dispatch){

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    fetch(`/users`,
        {
            credentials: 'include',
            headers,
            method: 'POST',
            body: JSON.stringify(body)
        }
    ).then(
        result => {
            console.log('/users', result);
            if (result.status - 0 === 200) {
                const {username, password} = body
                    , {data} = result;

                signin({ username, password, data });

            } else {
                dispatch({
                    type: USER_REGISTER_FAILED,
                    error: result.statusText
                });
            }
        }
    ).catch((error) => {
        console.log('/users', error.response);
        /* store.dispatch(signin(data.username, data.password));*/
    });

}

export function signup(username, password, data) {
  return {
    type: USER_SIGNUP,
    payload: {
      username,
      password,
      data
    }
  };
}

export function logout() {
  return {
    type: USER_LOGOUT
  };
}

function signin({ username, password, data }) {
    return {
        type: USER_SIGNIN,
        payload: {
            username,
            password,
            data
        }
    };
}
