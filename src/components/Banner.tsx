import React from 'react';
import { Container, Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
//mui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
//assets
import avatar from '../assets/img/avatar.png';

const Banner: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.avatarWrapper}>
          <Container maxWidth='lg'>
            <Grid
              container
              direction='column'
              alignContent='center'
              alignItems='center'
            >
              <Avatar alt='Jingfu' src={avatar} className={classes.avatar} />
              <Typography variant='h2' component='h1' className={classes.name}>
                Jingfu Dong
              </Typography>
              <Typography variant='h5' className={classes.role}>
                Full-stack developer
              </Typography>
              <Grid container className={classes.logoWrapper}>
                <GitHubIcon
                  color='secondary'
                  className={classes.socialLogo}
                  onClick={() => {
                    window.open('https://github.com/Dongongngg');
                  }}
                />
                <LinkedInIcon
                  color='secondary'
                  className={classes.socialLogo2}
                  onClick={() => {
                    window.open(
                      'https://www.linkedin.com/in/jingfu-dong-james/',
                    );
                  }}
                />
                <EmailIcon
                  color='secondary'
                  className={classes.socialLogo2}
                  onClick={() => {
                    window.open('mailto:jingfu.dong0320@gmail.com');
                  }}
                />
                <DescriptionIcon
                  color='secondary'
                  className={classes.socialLogo}
                  onClick={() => {
                    window.open('Resume_Jingfu_Dong.pdf');
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container maxWidth='lg'>
            <Grid
              container
              direction='column'
              alignContent='center'
              className={classes.introWrapper}
            >
              <Typography variant='h2'>About me</Typography>
              <Typography variant='h5' component='p' className={classes.about}>
                I am a self-motivated full-stack developer passionate about web
                development, primarily{' '}
                <Typography
                  color='secondary'
                  variant='h5'
                  component='span'
                  display='inline'
                  className={classes.about}
                >
                  JavaScript/TypeScript
                </Typography>{' '}
                +{' '}
                <Typography
                  color='secondary'
                  variant='h5'
                  component='span'
                  display='inline'
                  className={classes.about}
                >
                  NodeJS
                </Typography>
                .
              </Typography>
              <Typography variant='h5' component='p' className={classes.about}>
                Development job has never been just a job for me, it is a
                lifestyle that offered engaging challenges to continuous
                learning and improvement of my skills. I am keen on learning.
              </Typography>
              <Typography variant='h5' component='p' className={classes.about}>
                I care about clean code and keen on improving my skills. I’m
                looking for the right opportunity to contribute to the projects
                that make me proud.
              </Typography>

              <Grid container>
                <Grid item xs={12} sm={6} className={classes.eduWrapper}>
                  <SchoolIcon />
                  <Typography variant='h5'>Master of IT, 2017</Typography>
                  <Typography color='textSecondary' variant='h6'>
                    University of Wollongong, Wollongong
                  </Typography>
                  <Typography variant='h6'>Enterprise Network</Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.eduWrapper}>
                  <SchoolIcon />
                  <Typography variant='h5'>Bachelor of IT, 2015</Typography>
                  <Typography color='textSecondary' variant='h6'>
                    Beijing University of Technology, Beijing
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  name: { fontFamily: "'Roboto Slab', serif" },
  role: { color: theme.palette.text.secondary },
  avatarWrapper: {
    borderRight: `2px solid ${theme.palette.divider}`,
    '@media(max-width:960px)': {
      borderBottom: `2px solid ${theme.palette.divider}`,
      borderRight: 'none',
      paddingBottom: theme.spacing(4),
    },
  },
  avatar: {
    height: 250,
    width: 250,
    border: `4px solid ${theme.palette.secondary.main}`,
    '@media(max-width:960px)': {
      height: 200,
      width: 200,
      marginBottom: theme.spacing(4),
    },
    marginBottom: theme.spacing(8),
  },
  introWrapper: {
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(4),
    },
  },
  about: {
    marginBottom: theme.spacing(2),
  },
  logoWrapper: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItem: 'center',
  },
  socialLogo: { fontSize: '2.5rem', cursor: 'pointer' },
  socialLogo2: { fontSize: '2.75rem', cursor: 'pointer' },
  eduWrapper: { marginTop: theme.spacing(2) },
}));
