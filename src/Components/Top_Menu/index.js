import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LeftMenu from '../Left_Menu'
import {connect} from 'react-redux'
import {searchUsersFetchData} from '../../Redux/Actions/GetUsers';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class TopMenuApp extends Component {
    search = (event) => {
        let text = event.target.value;
        let users = [...this.props.users];
        users.map(item => (`${item.firstName} ${item.lastName}`.includes(text) || item.firstName.includes(text) || item.lastName.includes(text) || item.position.includes(text)) ? item.show = true : item.show = false);
        console.log(...users);
        this.props.searchUsers(users);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar color={`primary`} position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <LeftMenu/>
                        </IconButton>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Поиск…"
                                id={`searchInput`}
                                onChange={this.search}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };
}

TopMenuApp.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return {
        users: state.getUsers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchUsers: (users, text) => dispatch(searchUsersFetchData(users, text))
    };
};

const TopMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenuApp);


export default withStyles(styles)(TopMenu);