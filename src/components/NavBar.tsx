import React, { useState } from 'react';
//mui
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
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
    drawerWrapper: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.disabled,
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
  }),
);

const drawerStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 200,
  },
  listItem: {
    paddingLeft: theme.spacing(5),
  },
}));

const naviItem = ['about', 'skill', 'work', 'projects'];
//scroll to location - height of navbar
const scrollToId = (props: string) => {
  const target = document.getElementById(props);
  const navBar = document.getElementById('nav-bar');

  if (target) {
    const destination = target.offsetTop - (navBar?.offsetHeight || 0);
    window.scroll({ top: destination, behavior: 'smooth' });
  }
};
const NavDrawer: React.FC = () => {
  const classes = drawerStyles();
  return (
    <List className={classes.list}>
      <ListItem>
        <Typography variant='h5'>Jingfu Dong</Typography>
      </ListItem>

      <Divider />
      {naviItem.map((e, i) => (
        <ListItem
          button
          key={i}
          onClick={() => scrollToId(e)}
          className={classes.listItem}
        >
          {/* <ListItemIcon>e</ListItemIcon> */}
          <Typography variant='button'>{e}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();

  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  return (
    <Container maxWidth={false} className={classes.root}>
      <AppBar position='fixed' className={classes.appBar} id='nav-bar'>
        <Toolbar>
          <Hidden smUp>
            <MenuIcon onClick={toggleDrawer} />
            <Drawer
              anchor='left'
              open={openNav}
              onClose={toggleDrawer}
              classes={{ paper: classes.drawerWrapper }}
            >
              <NavDrawer />
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Typography
              variant='h6'
              className={classes.title}
              onClick={() => scrollToId('about')}
            >
              Jingfu Dong
            </Typography>
            {naviItem.map(e => (
              <Button key={e} color='inherit' onClick={() => scrollToId(e)}>
                {e}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
