//////////////   React     ///////////////////////
import React, {Component} from 'react';
///////////// Material UI  //////////////////////
import Grid from '@material-ui/core/Grid';
//////////////    Router   /////////////////////
import {Route, Switch,Redirect } from 'react-router-dom';
//////////////   Links    //////////////////////
import beforeAuthLinks from "./Links/beforeAuth"
import afterAuthLinks from './Links/afterAuth'
//////////////   Routes  ///////////////////////
import AppRoutesAfter from "./Routes/afterAuth"
import AppRoutesBefore from "./Routes/beforeAuth"
////////////////////////////////////////////////
import MenuLinks from '../Components/Menu_Links'
import TopMenu from '../Components/Top_Menu';
import {connect} from "react-redux";

class RouterApp extends Component {

    render() {
        const authBool = this.props.auth.authBool;
        this.routes = [AppRoutesAfter, AppRoutesBefore];
        this.links = (authBool ? afterAuthLinks : beforeAuthLinks);
        this.useRoutes = (authBool ? this.routes[0] : this.routes[1]).map(item => {
            return (
                <Route path={item.path} component={item.component} key={item.key}/>
            )
        });

        return (
            <>
                <Grid container>

                    {!authBool ?
                        (<Grid item>
                            {MenuLinks(this.links)}
                        </Grid>)
                        :
                        (<Grid item xs={12}>
                            <TopMenu/>
                        </Grid>)}
                    <Grid item xs={12}>
                        <Switch>
                            {authBool && <Route exact path="/SignIn" render={() => (<Redirect to="/People"/>)}/>}
                            {this.useRoutes}
                        </Switch>
                    </Grid>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = ({auth}) => ({auth});
export default connect(mapStateToProps)(RouterApp)