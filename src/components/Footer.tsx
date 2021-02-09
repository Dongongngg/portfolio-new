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
}));
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <Container maxWidth='sm' className={classes.navWrapper}>
        <GitHubIcon fontSize='large' />
        <LinkedInIcon fontSize='large' />
        <EmailIcon fontSize='large' />
        <DescriptionIcon fontSize='large' />
      </Container>

      <Typography variant='h5' align='center'>
        © Jingfu Dong
      </Typography>
      <Typography variant='body1' align='right'>
        Design inspired by{' '}
        <Typography component='a' href='https://manparvesh.com/'>
          Man Parvesh Singh Randhawa
        </Typography>
      </Typography>
    </Container>
  );
};

export default Footer;
