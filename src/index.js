import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import SignIn from 'pages/SignIn/SignIn';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
);
