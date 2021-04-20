import React from 'react';
import { Link } from 'react-router-dom';
//mui
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//components
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <Container maxWidth='lg' className={classes.errorWrapper}>
        <Typography variant='h2' component='h1'>
          Page not found
        </Typography>
        <Typography variant='h5'>
          <Link to='/'>Go back</Link>
        </Typography>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default NotFoundPage;

const useStyles = makeStyles({
  errorWrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
