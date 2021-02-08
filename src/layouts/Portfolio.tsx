// import React from 'react';
// //mui
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     paddingTop: theme.spacing(10),
//     paddingBottom: theme.spacing(12),
//     '@media(max-width:960px)': {
//       paddingTop: theme.spacing(5),
//       paddingBottom: theme.spacing(6),
//     },
//   },
// }));

// interface MyProps {
//   children: React.FC;
// }

// const Portfolio: React.FC = (props: MyProps) => {
//   const classes = useStyles();
//   return (
//       <section className={classes.root}>{props.banner}</section>
//   );
// };
// export default Portfolio;
import React from 'react';
//mui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(6),
    },
  },
  skill: { backgroundColor: theme.palette.background.paper },
  project: { backgroundColor: theme.palette.background.paper },
}));

// interface MyProps {
//   banner?: React.FC;
//   skill?: React.FC;
//   work?: React.FC;
//   project?: React.FC;
// }

interface MyProps {
  banner?: React.ReactNode;
  skill?: React.ReactNode;
  work?: React.ReactNode;
  project?: React.ReactNode;
}

const Portfolio: React.FC<MyProps> = (props: MyProps) => {
  const classes = useStyles();
  return (
    <main>
      <section className={classes.root}>{props.banner}</section>
      <section className={`${classes.root} ` + `${classes.skill}`}>
        {props.skill}
      </section>
      <section className={classes.root}>{props.work}</section>
      <section className={`${classes.root} ` + `${classes.project}`}>
        {props.project}
      </section>
    </main>
  );
};
export default Portfolio;
