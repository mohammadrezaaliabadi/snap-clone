import React, { useState } from "react";
import "./Snap.css";
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Fab, IconButton, Paper, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AddIcCallOutlined, CloseRounded, Home, HomeMaxOutlined, HomeOutlined, KeyboardArrowDownOutlined, Person2Outlined } from "@mui/icons-material";
import theme from '../../theme';



export default function(){
    const [value, setValue] = React.useState('one');

    return (
        <>
        <img className="test" src="./test3.png" alt="" />
        <Box sx={{position:"sticky", flexGrow: 1,zIndex:"25" }}>
        <AppBar  style={{ direction:"rtl", paddingX:"1rem", background: 'transparent', boxShadow:"none"}}>
            <Toolbar>
              <Link to="/">
                <Fab sx={{margin:"1rem", background:"#fff",color:"#333",    boxShadow: "rgba(97, 100, 117, 0.06) 0px 8px 10px, rgba(97, 100, 117, 0.04) 0px 3px 14px, rgba(97, 100, 117, 0.12) 0px 5px 5px;"}} 
                    size="medium" aria-label="add">
                    <HomeOutlined  />
                </Fab>
              </Link>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1,display:"flex",justifyContent:"center",alignItems:"center" }}>
            <Fab variant="extended" sx={{padding:"1rem", background:"#fff",color:"#333",    boxShadow: "none"}}
             size="medium">
                برای خودم
                <KeyboardArrowDownOutlined sx={{ mr: 1 }} />
                </Fab>
            </Typography>

            <Link to="/prof">
                <Fab sx={{margin:"1rem", background:"#fff",color:"#333",    boxShadow: "rgba(97, 100, 117, 0.06) 0px 8px 10px, rgba(97, 100, 117, 0.04) 0px 3px 14px, rgba(97, 100, 117, 0.12) 0px 5px 5px;"}} 
                    size="medium" aria-label="add">
                    <Person2Outlined  />
                </Fab>
            </Link>
            </Toolbar>
            
        </AppBar>
      </Box>
        <Paper sx={{
            position: 'fixed',
            display:"flex",
            flexFlow:"column",
            justifyContent:"center",
            alignItems:"center", 
            bottom: "0", 
            left: "0", 
            right: "0",
            borderRadius:"0.5rem", 
            padding:"0", 
            boxShadow:"rgba(97, 100, 117, 0.06) 0px 8px 10px, rgba(97, 100, 117, 0.04) 0px 3px 14px, rgba(97, 100, 117, 0.12) 0px 5px 5px;" }} elevation={3}>
            <div className="css-dulgpo css-11nz33r">
                <svg aria-hidden="true" color="outline.thin" focusable="false" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg" className="css-ci74zn">
                    <path d="M.5 5.38c0-.8.51-1.51 1.27-1.77l10.1-3.4a2 2 0 0 1 1.27 0l10.09 3.4a1.87 1.87 0 1 1-1.2 3.55l-9.19-3.13a1.06 1.06 0 0 0-.68 0L2.98 7.16A1.87 1.87 0 0 1 .5 5.38Z"></path>
                </svg>
            </div>
            <div className="search_address_container">
                <div className="search-address-input_searchAddressInput__81I0O css-1x3la9m css-hbfmh2">
                    <svg aria-hidden="true" color="secondary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="css-l13xe6"><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"></path></svg>
                    <h6 color="surface.high" className="search-address-input_ellipsisAddress__Uma4+ css-waw5mj">استاد معین، میدان آزادی، </h6>
                    <div className="css-183p19b css-10s76o4">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="css-1nizb2t"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="snap_bottom_nav_btn_container_outer">
                <div className="snap_bottom_nav_btn_container">
                    <Button className="snap_bottom_nav_btn" variant="contained" size="large" fullWidth>
                        تأیید مبدأ
                    </Button>
                </div>

            </div>
        </Paper>
        </>
    )
};