import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as axios from 'axios';
import {API_HOST} from "../../Config/URL";

const styles = theme => ({
    root: {
        width: '100%',
    },
    avatar: {
        width: 40,
        height: 40,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class PeopleListApp extends React.Component {

    maxSalary = () => {
        let newArr = this.props.users.sort((a, b) => b.salary - a.salary);
        this.setState({workers: newArr});
    };
    minSalary = () => {
        let newArr = this.props.users.sort((a, b) => a.salary - b.salary);
        this.setState({workers: newArr});
    };
    filterName = () => {
        let newArr = this.props.users.sort((a, b) => {
            let nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.setState({workers: newArr});
    };
    deleteUser = (index) => {
        let users = this.props.users;
        users.splice(index, 1);
        this.props.deleteUser(users);
    };

    render() {
        const {classes} = this.props;
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <>
                <div className={`workersContainer`}>
                    {this.props.users.map((item, index) =>
                        item.show &&
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    <Grid item lg={1} style={{
                                        display: `flex`,
                                        flexDirection: `row`,
                                        alignItems: `center`,
                                        justifyContent: `space-around`
                                    }}>
                                        <Avatar alt="Remy Sharp"
                                                src="https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg"
                                                className={classes.avatar}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Typography
                                            className={classes.heading}>{item.firstName} {item.lastName}</Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Typography
                                            className={classes.heading}>{item.position} разработчик</Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Typography className={classes.heading}>{item.level}</Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Typography className={classes.heading}>{item.salary} грн</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <Divider/>
                            <ExpansionPanelActions>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {(this.props.page === `People`) ?
                                        (<Button onClick={() => {
                                            axios.post(`${API_HOST}addFriend`, {
                                                idUser: `${this.props.authUser.id}`,
                                                idFriend: `${item.id}`
                                            })
                                                .then((res) => {
                                                        console.log(res);
                                                    }
                                                )
                                        }} variant="outlined">
                                            <Typography>Добавить в друзья</Typography>
                                        </Button>) : null
                                    }
                                </Grid>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {(this.props.page === `Friends`) ?
                                        (<Button variant="outlined">
                                            <Typography>Написать</Typography>
                                        </Button>) : null
                                    }
                                </Grid>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {(this.props.page === `Friends`) ?
                                        (<Button onClick={() => this.deleteUser(index)} variant="outlined">
                                            <Typography>Уволить</Typography>
                                        </Button>) : null
                                    }
                                </Grid>
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                    )}
                </div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {popupState => (
                        <React.Fragment>
                            <Button style={{position: `fixed`, right: `15px`, bottom: `15px`}}
                                    variant="contained" {...bindTrigger(popupState)}>
                                Фильтровать
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>
                                    <div onClick={this.maxSalary}>Максимальная зарплата
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <div onClick={this.minSalary}>Минимальная зарплата
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <div onClick={this.filterName}>По алфовиту
                                    </div>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </>
        )
    }
}

export default withStyles(styles)(PeopleListApp);