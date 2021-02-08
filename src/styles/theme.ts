import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#313131',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    primary: {
      main: '#32325d',
      light: '#636090',
    },
    secondary: {
      main: '#00C895',
    },
    background: {
      default: '#fff',
      paper: '#f7f7f7',
    },
  },
  typography: {
    fontSize: 14,
    //  h1: title
    h1: {
      marginBottom: '0.75rem',
      fontFamily: "'Roboto Slab', serif",
    },
    //  h2: subtitle
    h2: { marginBottom: '1.5rem', fontFamily: "'Roboto Slab', serif" },
    h3: { fontWeight: 500, marginBottom: '0.5rem' },
    // h4: 3rd title
    h4: { fontWeight: 500 },
    //  h5: content, display as p
    h5: {
      fontWeight: 500,
      lineHeight: 1.5,
      marginBottom: '0.5rem',
      fontFamily: "'Catamaran', sans-serif",
    },
    body1: {},
    subtitle1: { color: 'rgba(0,0,0,0.54)' },
    // fontFamily: [
    //   "'Source Sans Pro', sans-serif",
    //   "'Yusei Magic', sans-serif",
    //   "'Arvo', serif",
    // ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
