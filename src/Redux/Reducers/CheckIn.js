export function CheckINHasErrored(state = false, action) {
    switch (action.type) {
        case 'CHECK_IN_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function CheckINLoading(state = false, action) {
    switch (action.type) {
        case 'CHECK_IN_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function CheckIN(state = false, action) {
    switch (action.type) {
        case 'CHECK_IN_FETCH_DATA_SUCCESS':
            return {
                email: action.email,
                token: action.token,
                firstName: action.firstName,
                lastName: action.lastName,
                position: action.position,
                salary: action.salary
            };


        default:
            return state;
    }
}