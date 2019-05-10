import * as axios from 'axios';

export function authHasErrored(bool) {
    console.log(`Ошибка авторизации`);
    return {
        type: 'AUTH_HAS_ERRORED',
        hasErrored: bool
    };
}

export function authIsLoading(bool) {
    console.log(bool ? `Загрузка началась` : `Загрузка закончилась`);
    return {
        type: 'AUTH_IS_LOADING',
        isLoading: bool
    };
}


export function authSuccess(data) {
    console.log(`Авторизовались`);
    console.log(data);
    return {
        type: 'AUTH_SUCCESS',
        authBool: true,
        email: data.email,
        token: data.token,
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName
    };
}

export function authFetchData(url, userData) {
    return (dispatch) => {
        dispatch(authIsLoading(true));
        axios.post(url, userData)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(authIsLoading(false));
                return response.data;
            })
            .then((data) => dispatch(authSuccess(data)))
            .catch(() => dispatch(authHasErrored(true))
            )
        ;
    };
}