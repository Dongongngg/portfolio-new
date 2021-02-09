import React from 'react';
//mui
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Hidden,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    appBar: {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.text.primary,
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
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Hidden smUp>
            <MenuIcon />
          </Hidden>
          <Hidden xsDown>
            <Typography variant='h6' className={classes.title}>
              Jingfu Dong
            </Typography>
            <Button color='inherit'>about me</Button>
            <Button color='inherit'>work</Button>
            <Button color='inherit'>projects</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
