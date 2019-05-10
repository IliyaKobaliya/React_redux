export function getFriendsHasErrored(state = false, action) {
    switch (action.type) {
        case 'GET_FRIENDS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function getFriendsLoading(state = false, action) {
    switch (action.type) {
        case 'GET_FRIENDS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getFriends(state = [], action) {
    switch (action.type) {
        case 'GET_FRIENDS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}


