import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
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
      default: '#f6f9fc',
    },
  },
  typography: {
    fontSize: 14,
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    body1: {},
    body2: {},
    fontFamily: [
      " 'Fraunces', serif",
      "'Merriweather', serif",
      "'Dancing Script', cursive",
    ].join(','),
  },
  spacing: 8,
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  // fontSize: '80%',
};

export default theme;
