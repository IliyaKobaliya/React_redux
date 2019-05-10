import * as axios from 'axios';

export function getFriendsHasErrored(bool) {
    console.log(`ошибка загрузки пользователей`);
    return {
        type: 'GET_FRIENDS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function getFriendsIsLoading(bool) {
    console.log(`загрузка пользователей`);
    return {
        type: 'GET_FRIENDS_IS_LOADING',
        isLoading: bool
    };
}

export function getFriendsFetchDataSuccess(users) {
    console.log(`Пользователи загружены`);
    return {
        type: 'GET_FRIENDS_FETCH_DATA_SUCCESS',
        users
    };
}


export function getFriendsFetchData(url,friendsId) {
    return (dispatch) => {
        dispatch(getFriendsIsLoading(true));
        axios.post(url,friendsId)
            .then((response) => {
                console.log(1);
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(getFriendsIsLoading(false));
                return response.data;
            })
            .then((data) => dispatch(getFriendsFetchDataSuccess(data)))
            .catch(() => dispatch(getFriendsHasErrored(true))
            )
        ;
    };
}
