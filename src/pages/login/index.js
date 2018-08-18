import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Paper, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import styles from './styles.styl';

const classes = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4
    },
    submit: {
        marginTop: theme.spacing.unit * 4
    },
    remind: {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 2
    }
});

const Login = ({ classes }) => (
    <div className={styles.container}>
        <Paper elevation={2} classes={{ root: classes.paper }}>
            <Typography variant="title">Login</Typography>

            <form className={styles.form} noValidate>
                <TextField id="email" name="email" label="E-Mail Address" required fullWidth />
                <TextField id="password" name="password" type="password" label="Password" required fullWidth />
                <Button type="submit" variant="contained" size="large" color="primary" classes={{ root: classes.submit }} fullWidth>Submit</Button>
            </form>
            
            <Typography
                component={NavLink}
                variant="caption"
                classes={{ root: classes.remind }}
                to="/reset-password"
            >Forgot Password</Typography>
        </Paper>
    </div>
);

export default withStyles(classes)(Login);
