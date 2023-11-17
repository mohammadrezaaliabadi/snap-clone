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
import theme from '../theme';
import {ThemeProvider } from '@mui/material';
import ProfMenu  from '../components/ProfMenu/ProfMenu';
import Snap from '../components/Snap/Snap';
import Home from '../components/Home/Home';


const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div style={{position:"relative"}}>
        <Home/>
        {/* <ButtonAppBar/> */}
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
  {
    path: "snap",
    element: 

    <ThemeProvider theme={theme}>
      <Snap/>

    </ThemeProvider>
  },
  {
    path: "prof",
    element: 

    <ThemeProvider theme={theme}>
      <ProfMenu/>

    </ThemeProvider>
  }
]);

const App = ()=> (<RouterProvider router={router} />);


export default App;
