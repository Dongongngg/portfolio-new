import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
//components
import SubTitle from './Title';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
const WorkExpHolder: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>
        <SubTitle name={'Work Experience'} />
      </Container>
    </section>
  );
};

export default WorkExpHolder;
