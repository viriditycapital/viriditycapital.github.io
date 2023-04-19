import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contracting from './pages/Contracting';
import Careers from './pages/Careers';
import About from './pages/About';
import Investors from './pages/Investors';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

/**
 * TODO: We should eventually have it so that the toolbar persists, instead of
 * reloading new pages every single time
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contracting",
    element: <Contracting />
  },
  {
    path: "/careers",
    element: <Careers />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/investors",
    element: <Investors />
  },
]);

let theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);