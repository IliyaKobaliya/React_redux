export function getUsersHasErrored(state = false, action) {
    switch (action.type) {
        case 'GET_USERS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function getUsersLoading(state = false, action) {
    switch (action.type) {
        case 'GET_USERS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getUsers(state = [], action) {
    switch (action.type) {
        case 'GET_USERS_FETCH_DATA_SUCCESS':
            return action.users;
        case 'DELETE_USER_FETCH_DATA_SUCCESS':
            return action.users;
        case 'SEARCH_USERS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}


