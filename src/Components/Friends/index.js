import React from 'react';
import {API_HOST} from "../../Config/URL";
import {connect} from 'react-redux'
import {getUsersFetchData, deleteUser} from '../../Redux/Actions/GetUsers';
import PeopleListApp from '../PeopleListApp'


class PeopleApp extends React.Component {
    componentDidMount() {
        // this.props.loadUsers(`${API_HOST}getFriends`);
        console.log(this.props.authUser.friends);
    };

    render() {
        return (
<h2>ppp</h2>
            // {/*<PeopleListApp  page={`People`} users={this.props.people} isLoading={this.props.isLoading} hasErrored={this.props.hasErrored}*/}
            //                {/*loadUsers={this.props.loadUsers} deleteUser={this.props.deleteUser}/>*/}
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authUser: state.auth,
        people: state.getUsers,
        hasErrored: state.getUsersLoading,
        isLoading: state.getUsersLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (url) => dispatch(getUsersFetchData(url)),
        deleteUser: (users, user) => dispatch(deleteUser(users, user))
    };
};

const People = connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleApp);


export default (People);