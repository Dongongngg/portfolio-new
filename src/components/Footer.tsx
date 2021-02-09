import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
//mui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.disabled,
  },
  navWrapper: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: { cursor: 'pointer' },
  claim: {
    '@media(max-width:960px)': {
      textAlign: 'center',
    },
  },
}));
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <Container maxWidth='sm' className={classes.navWrapper}>
        <GitHubIcon
          fontSize='large'
          className={classes.icon}
          onClick={() => {
            window.open('https://github.com/Dongongngg');
          }}
        />
        <LinkedInIcon
          fontSize='large'
          className={classes.icon}
          onClick={() => {
            window.open('https://www.linkedin.com/in/jingfu-dong-james/');
          }}
        />
        <EmailIcon
          fontSize='large'
          className={classes.icon}
          onClick={() => {
            window.open('mailto:jingfu.dong0320@gmail.com');
          }}
        />
        <DescriptionIcon
          fontSize='large'
          className={classes.icon}
          onClick={() => {
            window.open('Resume_Jingfu_Dong.pdf');
          }}
        />
      </Container>

      <Typography variant='h5' align='center'>
        © Jingfu Dong
      </Typography>
      <Typography variant='body1' align='right' className={classes.claim}>
        Design inspired by{' '}
        <Typography component='a' href='https://manparvesh.com/'>
          Man Parvesh Singh Randhawa
        </Typography>
      </Typography>
    </Container>
  );
};

export default Footer;
