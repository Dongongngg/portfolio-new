import React from 'react';
//mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(10),
    '@media(max-width:960px)': {
      paddingBottom: theme.spacing(4),
    },
  },
}));

interface MyProps {
  name: string;
}

const Title: React.FC<MyProps> = (props: MyProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography variant='h2'>{props.name}</Typography>
    </Container>
  );
};

export default Title;
