import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box style={{ marginTop: 32 }}>
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
