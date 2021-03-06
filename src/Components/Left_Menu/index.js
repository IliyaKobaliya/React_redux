import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Links from '../../Router/Links/afterAuth'
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class LeftMenu extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {Links.map((item) => (
                        <ListItem button key={item.key}>
                            <MenuItem><Link style={{width:`100%`,height:`100%`}} to={item.path}>
                                <Typography variant={`subtitle1`}>{item.title}</Typography>
                            </Link></MenuItem>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Выйти'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );


        return (
            <div>
                <div onClick={this.toggleDrawer('left', true)}><MenuIcon/></div>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);