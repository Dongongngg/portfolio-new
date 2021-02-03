import React from 'react';
//mui
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Jingfu Dong
          </Typography>
          <Button color='inherit'>about me</Button>
          <Button color='inherit'>work</Button>
          <Button color='inherit'>projects</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
