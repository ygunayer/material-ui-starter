import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Reboot } from 'material-ui';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { FullPageLayout } from './layout';
import { NotFound } from './pages/generic';

import { About, Home } from './pages';

import moment from 'moment';

moment.locale('tr');

const theme = createMuiTheme();

const AppRoute = ({ component: Component, layout: Layout = FullPageLayout, ...rest }) => (
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
            </Switch>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));
