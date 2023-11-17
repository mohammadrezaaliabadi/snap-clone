import React from "react";
import "./ProfMenu.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ClubIcon, theme } from "../Home/Home";
import { ArrowBackIos, CardGiftcard, CloseRounded, CloseSharp, CreditCard, FeedbackOutlined, History, InfoOutlined, LocalOffer, LocalOfferOutlined, Message, MessageOutlined, Settings, SettingsOutlined, StarBorder, SupportAgentOutlined } from "@mui/icons-material";
import { Container, SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";


let PayRight = (props) => (
  <SvgIcon {...props}>
    <path d="M17.4422 2c1 0 1.8182.8182 1.8182 1.8182v16.3636c0 1-.8182 1.8182-1.8182 1.8182h-9.091c-1 0-1.818-.8182-1.818-1.8182v-1.3591c0-.5.409-.9091.909-.9091s.909.4091.909.9091v.45h9.091V4.7273h-9.091v.4855c0 .5-.409.909-.909.909s-.909-.409-.909-.909V3.8182c0-1 .818-1.8182 1.818-1.8182h9.091Zm-3.3549 5.1818.1437.0053.1398.0157c.9673.1426 1.6938.9688 1.6938 1.9563v5.6818l-.0053.1437-.0157.1398c-.1425.9673-.9687 1.6938-1.9563 1.6938H6.1328l-.1437-.0053-.1398-.0157c-.9673-.1426-1.6938-.9688-1.6938-1.9563V9.1591l.0053-.1437.0157-.1398c.1426-.9673.9688-1.6938 1.9563-1.6938h7.9545Zm0 1.6818L6.1527 8.863l-.084.0062-.0516.0143c-.1004.0406-.1798.1498-.1798.2757v.8627l1.4318.0009.108.003.1418.0132c.9814.1266 1.7275.96 1.7275 1.9611l-.005.1412c-.0723 1.0261-.9277 1.8361-1.9723 1.8361l-1.4318-.0009v.8645l.0055.064.0143.0517c.0406.1004.1498.1798.2757.1798h7.9545l.064-.0055.0517-.0143c.1004-.0406.1798-.1498.1798-.2757V9.1591l-.0054-.064-.0144-.0517c-.0406-.1004-.1498-.1798-.2757-.1798Zm-8.25 2.84v.5909l1.4318.001.0506-.0034.0551-.0133c.1068-.039.1898-.15.1898-.2788l-.006-.0595a.2956.2956 0 0 0-.2895-.236l-1.4318-.0009Z"></path>
  </SvgIcon>
);


export default function ProfMenu(){
    return (
    <>
      <Box sx={{position:"fixed", flexGrow: 1,zIndex:"25" }}>
        <AppBar  style={{ paddingX:"1rem", background: '#ffffff', boxShadow:"none"}}>
            <Toolbar>
              <Link to="/snap">
                <IconButton
                  size="large"
                  edge="start"
                  color="#686C79"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  >
                    <CloseRounded/>
                </IconButton>
              </Link>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            </Toolbar>
            
        </AppBar>
      </Box>
      <Container sx={{display:"flex",flexFlow:"column",gap:"1rem", padding:"1rem 1.5rem 0 1.5rem",marginTop:"3rem" }} >
        <div className="menu_prof_header">
          <img className="menu_prof_header_img" src="./menu_icon/default-user-profile.webp"/>
          <div className="menu_prof_header_info">
            <h6 className="menu_prof_header_name">محمدرضا</h6>
            <p className="menu_prof_header_tel">09164351332</p>
          </div>
          <IconButton 
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <ArrowBackIos sx={{fontSize:"1rem"}} />

            </IconButton>
        </div>
        <div className="prof_menu">
          <div className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <CreditCard />
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">روش های پرداخت</h6>
              <p className="menu_sub_label">موجودی: ۰ ریال</p>
            </div>
            <IconButton 
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <ArrowBackIos sx={{fontSize:"1rem"}} />
            </IconButton>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>
          <div className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <ClubIcon/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">اسنپ‌کلاب</h6>
            </div>
            <div class="css-13kdb8l css-13fy8vg">
              <svg className="css-1nizb2t" aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8CF2C2" d="M12.2046 3.3594c.4209 0 .8415.1457 1.1871.4375l.0848.076 4.908 4.6675c.4803.4563.699 1.1367.5856 1.7983l-.022.1101-1.2517 5.4651c-.0916.401-.3017.7606-.5991 1.029l-.0833.0709-2.7954 2.2477-1.0416.8159a1.8266 1.8266 0 0 1-.9451.2646 1.828 1.828 0 0 1-.9261-.2531L9.958 19.0195l-2.431-1.9797c-.3022-.2457-.5246-.5812-.6387-.9607l-.031-.1151-1.3247-5.5668c-.1577-.6635.027-1.3618.482-1.8472l.0783-.0789 4.841-4.5991c.3599-.342.8154-.5126 1.2706-.5126Z"></path><path fill="#1AB25D" d="m15.0669 14.1367 2.4397 2.2738c-.1069.2002-.2069.3803-.3749.5314l-.0835.0709-3.0537 2.4482-.7525.5889a1.8375 1.8375 0 0 1-.984.2911l-.0002-4.1288 2.8091-2.0755Z"></path><path fill="#1D9D50" d="m9.4263 14.1367 2.8353 2.0755.0002 4.1288h-.0067a1.8362 1.8362 0 0 1-.8968-.2347l-1.5794-1.2462-2.2432-1.8212a1.9445 1.9445 0 0 1-.4874-.5907l2.378-2.3115Z"></path><path fill="#04D170" d="M18.9345 9.4785a2.039 2.039 0 0 1 .0368.8616l-.0221.11-1.2569 5.4651a2.0087 2.0087 0 0 1-.1861.4977l-2.4825-2.2738.7785-3.5337 3.1323-1.1269Z"></path><path fill="#1A954B" d="m5.5399 9.4277 3.0564 1.1875.8285 3.524-2.378 2.3114a2.001 2.001 0 0 1-.1533-.37l-.031-.1151-1.329-5.5668a2.0386 2.0386 0 0 1 .0064-.971Z"></path><path fill="#21A555" d="m12.2324 3.3594.0001 3.866-3.6343 3.3883-3.0564-1.1875a1.9878 1.9878 0 0 1 .4771-.8762l.0786-.0789 4.8561-4.5991c.3609-.342.8179-.5126 1.2744-.5126h.0044Z"></path><path fill="#0DC368" d="M12.2133 7.2344c.2245 0 .4488.0719.636.2159l.0684.0573 2.7182 2.4834c.2607.238.3823.5904.3278.9358l-.0157.0796-.6932 2.9077a1.0441 1.0441 0 0 1-.3097.5277l-.0682.0575-2.0104 1.553a1.0432 1.0432 0 0 1-1.2088.048l-.0726-.0519-1.9623-1.5352a1.0444 1.0444 0 0 1-.3464-.4886l-.0245-.0838-.7337-2.9619a1.0474 1.0474 0 0 1 .2521-.9673l.0582-.0575 2.6811-2.447a1.0408 1.0408 0 0 1 .7037-.2727Z"></path><path fill="#8CF2C2" d="M11.6818 12.8102c.4517 0 .8181.3745.8181.8357 0 .4614-.3664.8357-.8181.8357-.4516 0-.8183-.3743-.8183-.8357 0-.4612.3667-.8357.8183-.8357Zm1.7667-3.9235-.7267 2.8452c-.0881.3486-.3959.5923-.7486.5923h-.7285l.8762-3.4375h1.3276Z"></path>
                </svg>
                <div class="css-1avyp1d css-10s76o4">
                  <p color="surface.high" class="css-1451qnd"> 3670</p>
                  </div>
                  <div class="css-1avyp1d css-10s76o4">
                    <p color="surface.high" class="css-tg0iph">امتیاز</p>
                  </div>
                </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>
          <Link to="/history">
            <div onClick={()=>console.log("test")} className="prof_menu_item">
            <IconButton
              className="prof_menu_icon"
                  size="large"
                  edge="start"
                  color="#686C79"
                  aria-label="menu"
              >
                <History/>
              </IconButton>
              <div className="menu_label_container">
                <h6 className="menu_label">سغرها</h6>
              </div>
            </div>
          </Link>
          <hr color="dark" className="hr_menu_prof"></hr>

          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <PayRight/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">پرداخت مستقیم</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <StarBorder/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">مکان‌های منتخب</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <LocalOfferOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">تخفیف‌ها و جایزه‌ها</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <MessageOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">پیام‌ها</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <CardGiftcard/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">دعوت از دوستان</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <FeedbackOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">درخواست ویرایش نقشه</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
                sx={{}}
            >
              <SettingsOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">تنظیمات</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
                sx={{}}
            >
              <SupportAgentOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">پشتیبانی</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>

          
          <div  className="prof_menu_item">
          <IconButton
            className="prof_menu_icon"
                size="large"
                edge="start"
                color="#686C79"
                aria-label="menu"
            >
              <InfoOutlined/>
            </IconButton>
            <div className="menu_label_container">
              <h6 className="menu_label">دربارهٔ اسنپ</h6>
            </div>
          </div>
          <hr color="dark" className="hr_menu_prof"></hr>




        </div>
      </Container>
    </>

    )

};