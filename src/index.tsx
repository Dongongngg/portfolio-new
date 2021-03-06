import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//css
import './styles/reset.css';
//theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
//
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
