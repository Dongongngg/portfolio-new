import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
//icons
import CodeIcon from '@material-ui/icons/Code';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import StorageIcon from '@material-ui/icons/Storage';
import UpdateIcon from '@material-ui/icons/Update';
import BuildIcon from '@material-ui/icons/Build';
//components
import SubTitle from './Title';
//data
import data from '../assets/data.json';
const useStyles = makeStyles((theme: Theme) => ({
  typeWrapper: {
    padding: '1rem 0',
  },
  typeTitleWrapper: {
    textAlign: 'center',
    borderRight: `2px solid ${theme.palette.divider}`,
  },

  title: {},
  typeContentWrapper: {},
}));

const SkillHolder: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <SubTitle name='My Skills' />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <CodeIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Language
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.language.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <FlipToFrontIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Front-end
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.frontend.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <FlipToBackIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Back-end
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.backend.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <StorageIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Database
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.database.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <UpdateIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Version
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.version.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <BuildIcon fontSize='large' color='secondary' />
                <Typography variant='h4' className={classes.title}>
                  Devops
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8}>
              <Container maxWidth='lg'>
                {data.skill.devops.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillHolder;
