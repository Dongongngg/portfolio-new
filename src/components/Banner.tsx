import React from 'react';
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  avatarWrapper: {
    borderRight: '1px solid black',
    '@media(max-width:960px)': {
      borderBottom: '1px solid black',
      borderRight: 'none',
    },
  },
  introWrapper: {},
  logoWrapper: { textAlign: 'center' },
});

const Banner: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.avatarWrapper}>
            <Container maxWidth='lg'>
              {' '}
              <Grid
                container
                direction='column'
                alignContent='center'
                alignItems='center'
              >
                <Typography>photo</Typography>

                <Typography variant='h2' component='h1'>
                  Jingfu Dong
                </Typography>
                <Grid
                  container
                  alignContent='center'
                  alignItems='center'
                  spacing={2}
                >
                  <Grid item xs={4} className={classes.logoWrapper}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.logoWrapper}>
                    <Typography>GitHub</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.logoWrapper}>
                    <Typography>LinkedIn</Typography>
                  </Grid>
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
                alignItems='center'
                className={classes.introWrapper}
              >
                <Typography variant='h2'>About me</Typography>
                <Typography variant='h4' component='p'>
                  I live in Sydney, I&apos;m passionate about web development.
                </Typography>
                <Typography variant='h4' component='p'>
                  I live in Sydney, I&apos;m passionate about web development.
                </Typography>
                <Typography variant='h4' component='p'>
                  I live in Sydney, I&apos;m passionate about web development.
                </Typography>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
