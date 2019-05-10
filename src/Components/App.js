import React, {Component} from 'react';
import RouterApp from "../Router"
import {Provider} from "react-redux"
import store from '../Redux/index'
import {SnackbarProvider} from 'notistack';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <SnackbarProvider maxSnack={3}>
                        <RouterApp/>
                    </SnackbarProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
