import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
} from '@material-ui/core/styles';

let theme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#333',
      secondary: '#787586',
      disabled: 'rgba(255,255,255,.8)',
    },
    primary: {
      main: '#A06C90',
      light: '#636090',
    },
    secondary: {
      main: '#5CB7B1',
      light: '#C8FCEA',
    },
    divider: '#787586',
    background: {
      default: '#fff',
      paper: '#f8f8f8',
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
    h2: {
      marginBottom: '1.5rem',
      fontFamily: "'Roboto Slab', serif",
      '@media(max-width:960px)': {
        marginBottom: '1rem',
      },
    },
    h3: {
      fontWeight: 500,
      marginBottom: '0.5rem',
      fontFamily: "'Roboto Slab', serif",
    },
    //  h4: 3rd title
    h4: { fontWeight: 500, fontFamily: "'Catamaran', sans-serif" },
    //  h5: card title or non-paper/card content, display as p
    h5: {
      fontWeight: 500,
      lineHeight: 1.5,
      fontFamily: "'Catamaran', sans-serif",
    },
    //  h6: card sub-title
    h6: { fontFamily: "'Catamaran', sans-serif" },
    body1: { fontFamily: "'Catamaran', sans-serif" },
    body2: { fontFamily: "'Roboto Slab', serif" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
