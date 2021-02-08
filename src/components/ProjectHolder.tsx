import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
//components
import SubTitle from './Title';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));
const ProjectHolder: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>
        <SubTitle name={'Projects'} />
      </Container>
    </section>
  );
};

export default ProjectHolder;
