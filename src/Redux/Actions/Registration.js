import * as axios from 'axios';

export function regHasErrored(bool) {
    console.log(`Ошибка регистрации`);
    return {
        type: 'CHECK_IN_HAS_ERRORED',
        hasErrored: bool
    };
}

export function regIsLoading(bool) {
    console.log(bool ? `Загрузка началась` : `Загрузка закончилась`);
    return {
        type: 'CHECK_IN_IS_LOADING',
        isLoading: bool
    };
}

export function regFetchDataSuccess(data) {
    console.log(`Учетная запись создана`);
    return {
        type: 'CHECK_IN_FETCH_DATA_SUCCESS',
        email: data.email,
        token: data.token,
        firstName: data.firstName,
        lastName: data.lastName
    };
}

export function regFetchData(url, userData) {
    return (dispatch) => {
        dispatch(regIsLoading(true));
        axios.post(url, userData)
            .then((response) => {
                console.log(1);
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(regIsLoading(false));
                return response.data;
            })
            .then((data) => dispatch(regFetchDataSuccess(data)))
            .catch(() => dispatch(regHasErrored(true))
            )
        ;
    };
}