const initialState = {
    authBool: false
};

export function authHasErrored(state = false, action) {
    switch (action.type) {
        case 'AUTH_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function authIsLoading(state = false, action) {
    switch (action.type) {
        case 'AUTH_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                authBool: action.authBool,
                email: action.email,
                token: action.token,
                id: action.id,
                firstName: action.firstName,
                lastName: action.lastName
            };


        default:
            return state;
    }
}