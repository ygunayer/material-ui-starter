import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, MenuItem, Tab, Tabs } from '@material-ui/core';

const styles = {
  flex: {
    flex: 1
  },
  menuItem: {
    minWidth: 0
  }
};

const routes = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'login', label: 'Login', path: '/login' }
];

const noop = () => {};

const Header = ({ children, classes, match = { path: '/' }}) => (
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit" className={classes.flex}>
            React &amp; Material UI Minimal Starter
          </Typography>
          <Tabs indicatorColor='primary' value={match.path}>
            {routes.map(({ key, label, path, exact = true }) => 
              <Tab
                component={NavLink}
                key={key}
                label={label}
                exact={exact}
                value={path}
                to={path}
                className={classes.menuItem}
              />
            )}
          </Tabs>
        </Toolbar>
    </AppBar>
);

export default withRouter(withStyles(styles)(Header));
