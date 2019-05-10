import {combineReducers} from "redux";
import {auth, authHasErrored, authIsLoading} from "./Authorization";
import {CheckIN, CheckINHasErrored, CheckINLoading} from "./CheckIn";
import {getUsers, getUsersHasErrored, getUsersLoading} from "./getUsers"
import {getFriends, getFriendsHasErrored, getFriendsLoading} from "./getFriends"
const rootReducer = combineReducers({
    auth,
    authHasErrored,
    authIsLoading,
    CheckIN,
    CheckINHasErrored,
    CheckINLoading,
    getUsers,
    getUsersHasErrored,
    getUsersLoading,
    getFriends,
    getFriendsHasErrored,
    getFriendsLoading
});
export default rootReducer;