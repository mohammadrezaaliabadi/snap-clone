import React, {useState} from 'react';
import "../fonts/IRANSansXFaNum-regular.woff2"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import History from '../components/History/History';
import ButtonAppBar from '../components/Home/Home';
import theme from '../theme';
import { ThemeProvider } from '@mui/material';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ButtonAppBar/>
        <Link to="history">اسنپ</Link>
      </div>
    ),
  },
  {
    path: "history",
    element: 

    <ThemeProvider theme={theme}>
      <History/>

    </ThemeProvider>
  },
]);

const App = ()=> (<RouterProvider router={router} />);


export default App;
