import * as axios from 'axios';

export function getUsersHasErrored(bool) {
    console.log(`ошибка загрузки пользователей`);
    return {
        type: 'GET_USERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function getUsersIsLoading(bool) {
    console.log(`загрузка пользователей`);
    return {
        type: 'GET_USERS_IS_LOADING',
        isLoading: bool
    };
}

export function getUsersFetchDataSuccess(users) {
    console.log(`Пользователи загружены`);
    return {
        type: 'GET_USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function deleteUser(users) {
    return {
        type: 'DELETE_USER_FETCH_DATA_SUCCESS',
        users
    };
}

export function searchUsersFetchData(users) {
    return {
        type: 'SEARCH_USERS_FETCH_DATA_SUCCESS',
        users
    }
}

export function getUsersFetchData(url) {
    return (dispatch) => {
        dispatch(getUsersIsLoading(true));
        axios.post(url)
            .then((response) => {
                console.log(1);
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(getUsersIsLoading(false));
                return response.data;
            })
            .then((data) => dispatch(getUsersFetchDataSuccess(data)))
            .catch(() => dispatch(getUsersHasErrored(true))
            )
        ;
    };
}
