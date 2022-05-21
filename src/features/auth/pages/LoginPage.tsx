import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import React from 'react';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    // TODO: get username and password from login form
    dispatch(
      authActions.login({
        username: 'test',
        password: 'test',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box style={{ marginTop: 32 }}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
