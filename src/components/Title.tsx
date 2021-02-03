import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  name: { padding: `${theme.spacing(4)}px 0` },
}));

interface MyProps {
  name: string;
}

const Title: React.FC<MyProps> = (props: MyProps) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.name}>
          {props.name}
        </Typography>
      </Container>
    </section>
  );
};

export default Title;
