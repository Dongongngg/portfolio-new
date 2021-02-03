import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: { backgroundColor: 'black' },
}));
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>Footer</Container>
    </section>
  );
};

export default Footer;
