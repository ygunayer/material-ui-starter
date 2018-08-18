import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { DefaultLayout, FullPageLayout } from './layout';
import { NotFound } from './pages/generic';

import { About, Home, Login } from './pages';

import moment from 'moment';

moment.locale('tr');

const theme = createMuiTheme();

const AppRoute = ({ component: Component, layout: Layout = DefaultLayout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <Router>
            <Switch>
                <AppRoute exact path="/" component={Home} />
                <AppRoute path="/about" component={About} />
                <AppRoute path="/login" component={Login} layout={FullPageLayout} />
                <AppRoute component={NotFound} />
            </Switch>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));
