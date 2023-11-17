import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Container, Paper, SvgIcon, Tab, Tabs } from '@mui/material';
import { Home, LocalOffer } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'keen-slider/keen-slider.min.css'
import HomeSlider from './HomeSlider';
import { Link } from 'react-router-dom';


let theme = createTheme({
    palette: {
      primary: {
        main: '#252A3C',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

  export {theme};

  

let ClubIcon = (props) => (
    <SvgIcon {...props}>
      <path fill-rule="evenodd" d="M4.4236 6.239a4 4 0 0 0-1.3348 1.932l-.3017.9526a3.9998 3.9998 0 0 0-.1446 1.786l.672 4.5982a3.9997 3.9997 0 0 0 .741 1.7986l.5169.6997c.2419.3273.5323.6159.8613.8556L7.6817 20.5l1.6916 1.2327a4.0004 4.0004 0 0 0 2.3558.7673h.5609a4.0002 4.0002 0 0 0 2.3558-.7673L16.3373 20.5l2.2482-1.6383a3.9998 3.9998 0 0 0 .8612-.8556l.517-.6997a3.9997 3.9997 0 0 0 .7409-1.7986l.672-4.5982a3.9988 3.9988 0 0 0-.1446-1.786l-.3016-.9527a4.0005 4.0005 0 0 0-1.3348-1.932L17.3929 4.5l-2.7101-2.1395A3.9998 3.9998 0 0 0 12.2043 1.5h-.3894a4 4 0 0 0-2.4786.8605L4.4236 6.2389Zm5.0772 9.3469a.5351.5351 0 0 0-.5595-.055l-2.2555 1.1062c-.2576.1264-.361.4317-.231.682a.5112.5112 0 0 0 .1488.1744l3.8996 2.9019c.2291.1704.5571.1282.7325-.0945a.4978.4978 0 0 0 .1077-.3086v-2.7449a.5026.5026 0 0 0-.1984-.3982l-1.6442-1.2633Zm7.8461 1.0512-2.2555-1.1062a.5351.5351 0 0 0-.5595.055l-1.6442 1.2633a.5026.5026 0 0 0-.1984.3982v2.7449c0 .1116.0378.22.1077.3086.1754.2227.5034.2649.7325.0945l3.8997-2.9019a.5112.5112 0 0 0 .1487-.1744c.13-.2503.0266-.5556-.231-.682Zm-4.9986-7.9196c-.1984-.1727-.4987-.1727-.6971 0l-2.0351 1.771a.9999.9999 0 0 0-.3239.9516l.5069 2.5185a.505.505 0 0 0 .1716.2871l1.7025 1.426a.5342.5342 0 0 0 .6756.0056l1.7613-1.4259a.5047.5047 0 0 0 .1808-.306l.4835-2.7995a.4999.4999 0 0 0-.1667-.4623l-2.2594-1.9661Zm-7.1412 1.4858c-.272-.094-.5707.0441-.6673.3083a.494.494 0 0 0-.0253.2393l.6396 4.5153c.0394.2778.303.4719.5889.4337a.536.536 0 0 0 .1527-.0442l2.2793-1.0508c.215-.0991.3339-.3268.2893-.5539l-.5173-2.6349c-.0347-.177-.1635-.3229-.3382-.3832l-2.4017-.8296Zm14.2976.5476a.4948.4948 0 0 0-.0253-.2393c-.0967-.2642-.3954-.4023-.6673-.3083l-2.4017.8296c-.1748.0603-.3035.2062-.3383.3832l-.5173 2.6349c-.0445.2271.0744.4548.2893.5539l2.2794 1.0508a.5348.5348 0 0 0 .1527.0442c.2858.0382.5495-.1559.5888-.4337l.6397-4.5153Zm-8.1613-6.7432a.499.499 0 0 0-.1215-.3255c-.185-.2152-.5145-.2439-.7359-.0641L5.4102 7.7379a.509.509 0 0 0-.1453.1899c-.1136.2578.0094.5562.2747.6665L8.008 9.621a.5342.5342 0 0 0 .5556-.0898l2.6073-2.286a.5014.5014 0 0 0 .1725-.377V4.0077Zm2.2028-.3896c-.2214-.1798-.5509-.151-.7359.0641a.499.499 0 0 0-.1215.3255v2.8604c0 .1437.0626.2807.1724.377l2.6074 2.286a.5342.5342 0 0 0 .5556.0898l2.4684-1.0266c.2653-.1103.3883-.4087.2747-.6665a.509.509 0 0 0-.1454-.1899l-5.0757-4.1198Z"></path>
    </SvgIcon>
  );

export {ClubIcon};

export default function() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (<>
          <Box sx={{position:"fixed", flexGrow: 1,zIndex:"25" }}>
                <AppBar  style={{ paddingX:"1rem", background: '#ffffff', boxShadow:"none"}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#686C79"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <CreditCardIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <svg width="74" height="22" viewBox="0 0 74 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.4173 5.7445C49.6429 5.7445 51.8777 8.47563 51.8777 11.6122C51.8777 14.7698 49.6641 17.4157 46.4595 17.4157C45.2184 17.4157 43.9356 16.9698 43.1134 16.0149C43.111 16.0121 43.1073 16.0135 43.1073 16.0169V19.3573C43.1073 20.6341 42.0845 21.6691 40.8229 21.6691H39.2703V6.1072H43.1073V7.31713C43.1073 7.33251 43.1194 7.34474 43.1346 7.34474C43.1433 7.34474 43.1524 7.34002 43.1575 7.33251C43.8548 6.25277 45.1572 5.7445 46.4173 5.7445ZM59.7415 5.7445C62.967 5.7445 65.2018 8.47563 65.2018 11.6122C65.2018 14.7698 62.9882 17.4157 59.7836 17.4157C58.5634 17.4157 57.3028 16.9848 56.4788 16.0622C56.4624 16.0431 56.4314 16.0547 56.4314 16.0803V19.3573C56.4314 20.6341 55.4087 21.6691 54.1471 21.6691H52.6218C52.6066 21.6691 52.5945 21.6569 52.5945 21.6415V6.13481C52.5945 6.1198 52.6066 6.1072 52.6218 6.1072H56.4041C56.4192 6.1072 56.4314 6.1198 56.4314 6.13481V7.31713C56.4314 7.33251 56.4436 7.34474 56.4587 7.34474C56.4678 7.34474 56.4765 7.34002 56.4816 7.33251C57.1793 6.25277 58.4813 5.7445 59.7415 5.7445ZM6.98797 0.538452C8.58161 0.538452 10.5301 1.04515 11.9408 1.84837C11.9534 1.8555 11.9584 1.87191 11.9517 1.88479L11.3642 3.04329C10.8616 4.03472 9.73237 4.51852 8.67629 4.20207C8.32185 4.09606 7.95304 4.03777 7.57846 4.03777C6.8195 4.03777 5.80746 4.48572 5.80746 5.38207C5.80746 6.32059 6.92489 6.68337 7.64145 6.91828L8.69579 7.23807C10.9094 7.89979 12.617 9.03031 12.617 11.6336C12.617 13.2336 12.2377 14.8765 10.9728 15.9647C9.7287 17.0315 8.06319 17.4798 6.46103 17.4798C4.46644 17.4798 2.51323 16.8024 0.893956 15.6589C0.882511 15.6508 0.879123 15.6354 0.885533 15.6232L2.64499 12.2739C3.67818 13.191 4.90072 13.938 6.31316 13.938C7.28335 13.938 8.31617 13.447 8.31617 12.3165C8.31617 11.1427 6.69278 10.7373 5.80746 10.4813C3.21433 9.73466 1.50642 9.05181 1.50642 5.93677C1.50642 2.67198 3.80454 0.538452 6.98797 0.538452ZM30.9072 5.7445C32.1267 5.7445 33.4069 6.19588 34.2116 7.11808C34.2284 7.13717 34.2594 7.12559 34.2594 7.10001V6.13481C34.2594 6.1198 34.2718 6.1072 34.2867 6.1072H38.0694C38.0845 6.1072 38.0967 6.1198 38.0967 6.13481V14.7412C38.0967 16.0179 37.0739 17.053 35.812 17.053H34.2867C34.2718 17.053 34.2594 17.0407 34.2594 17.0254V15.8645C34.2594 15.8492 34.2473 15.8369 34.2321 15.8369C34.223 15.8369 34.2142 15.8417 34.2096 15.8496C33.5325 16.9289 32.2096 17.4157 30.9497 17.4157C27.7451 17.4157 25.489 14.7061 25.489 11.5695C25.489 8.43301 27.7026 5.7445 30.9072 5.7445ZM68.3886 12.5013C69.7283 12.5013 70.8161 13.6021 70.8161 14.958C70.8161 16.3139 69.7283 17.4151 68.3886 17.4151C67.0485 17.4151 65.9607 16.3139 65.9607 14.958C65.9607 13.6021 67.0485 12.5013 68.3886 12.5013ZM20.692 5.74446C23.6012 5.74446 24.7608 7.60082 24.7608 10.2893V14.7412C24.7608 16.018 23.738 17.053 22.4765 17.053H20.951C20.9359 17.053 20.9239 17.0407 20.9239 17.0254V11.7189C20.9239 10.6732 21.0926 8.83837 19.195 8.83837C17.6349 8.83837 17.192 10.0118 17.192 11.3776V14.7412C17.192 16.018 16.1696 17.053 14.908 17.053H13.3823C13.3672 17.053 13.355 17.0407 13.355 17.0254V6.13476C13.355 6.11984 13.3672 6.10724 13.3823 6.10724H17.1647C17.1799 6.10724 17.192 6.11984 17.192 6.13476V7.48796C17.192 7.49821 17.1975 7.50707 17.2057 7.51183L17.2199 7.51557C17.229 7.51557 17.2375 7.51075 17.2425 7.50334C18.1264 6.19009 19.1997 5.74446 20.692 5.74446ZM31.9191 9.11586C30.3591 9.11586 29.4526 10.2467 29.4526 11.5907C29.4526 12.9776 30.3591 14.0446 31.9191 14.0446C33.4795 14.0446 34.3861 12.9776 34.3861 11.5907C34.3861 10.2467 33.4795 9.11586 31.9191 9.11586ZM45.4475 9.11586C43.8871 9.11586 42.9806 10.2467 42.9806 11.5907C42.9806 12.9776 43.8871 14.0446 45.4475 14.0446C47.0075 14.0446 47.9141 12.9776 47.9141 11.5907C47.9141 10.2467 47.0075 9.11586 45.4475 9.11586ZM58.7716 9.11586C57.2112 9.11586 56.3051 10.2467 56.3051 11.5907C56.3051 12.9776 57.2112 14.0446 58.7716 14.0446C60.3317 14.0446 61.2385 12.9776 61.2385 11.5907C61.2385 10.2467 60.3317 9.11586 58.7716 9.11586ZM73.6305 0.965343L71.4743 9.33034C71.2229 10.3161 70.3686 11.0162 69.3731 11.0686L69.253 11.0718H67.0913L69.6915 0.965343H73.6305ZM67.7486 0.966169L67.9494 1.4979L68.1501 0.966169H68.4634V1.86499H68.2693V1.13966H68.2649L68.0066 1.86499H67.892L67.6338 1.13966H67.6295V1.86499H67.4353V0.966169H67.7486ZM67.3271 0.966169V1.13966H67.0557V1.86499H66.8418V1.13966H66.5704V0.966169H67.3271Z" fill="#22A958"/>
                    </svg>
                    </Toolbar>
                    <ThemeProvider theme={theme}>
                            <Tabs
                                style={{direction:"rtl",fontFamily:"IRANSansXFaNum-regular"}}
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                >
                                    <Tab style={{fontFamily:"IRANSansXFaNum-regular"}} icon={<Home/>} value="one" label="خانه" />
                                    <Tab style={{fontFamily:"IRANSansXFaNum-regular"}} icon={<ClubIcon/>} value="two" label="اسنپ‌کلاب" />
                                    <Tab style={{fontFamily:"IRANSansXFaNum-regular"}} icon={<LocalOffer/>} value="three" label="تخفیف‌ها" />
                            </Tabs>
                    </ThemeProvider>
                    
                </AppBar>
            </Box>
            <Container sx={{display:"flex",flexFlow:"column",gap:"1rem", padding:"1rem 1.5rem 0 1.5rem",marginTop:"8rem" }} >

              <Box className="top-banner">
                <img className='top-banner-img' src='./smallfilimo.jpg'></img>
              </Box>

              <Box className="super-app-container" >
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Moving.png'></img>
                  <p className='super-app-label'>وانت و کامیون</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Old-Credit.png'></img>
                  <p className='super-app-label'>سرویس اعتباری</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Shop.png'></img>
                  <p className='super-app-label'>فروشگاه</p>

                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Trip.png'></img>
                  <p className='super-app-label'>بلیت سفر</p>

                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Driver.png'></img>
                  <p className='super-app-label'>ثبت نام رانندگان</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Doctor.png'></img>
                  <p className='super-app-label'>پزشک و مشاور</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Pharmacy2.png'></img>
                  <p className='super-app-label'>داروخانه</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Hotel2.png'></img>
                  <p className='super-app-label'>هتل</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Line.png'></img>
                  <p className='super-app-label'>اسنپ لاین</p>
                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Corporate.png'></img>
                  <p className='super-app-label'>بیمه سازمانی</p>

                </Box>
                <Box className="super-app-item">
                  <img className='super-app-icon' src='./icon/Insurance.png'></img>
                  <p className='super-app-label'>بیمه</p>
                </Box>
              </Box>

              <Box>
                <HomeSlider/>
              </Box>
              <Paper sx={{ direction:"rtl", position: 'fixed', bottom: "1.5rem", left: "1.5rem", right: "1.5rem",borderRadius:"0.5rem",padding:"1rem 0.25rem 0.5rem", boxShadow:"rgba(97, 100, 117, 0.06) 0px 8px 10px, rgba(97, 100, 117, 0.04) 0px 3px 14px, rgba(97, 100, 117, 0.12) 0px 5px 5px;" }} elevation={3}>
                <BottomNavigation sx={{paddingY:"0.5rem"}}
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction   label="اسنپ" icon={     
                  <Link  to="snap">
                      <img className='super-app-icon' src='./buttom_navigation_icon/cab.png'></img>

                  </Link>
                  } />
                  <BottomNavigationAction label="غذا" icon={
                      <Link  to="history">            
                        <img className='super-app-icon' src='./buttom_navigation_icon/food.png'></img>
                      </Link>
                  } />
                  <BottomNavigationAction label="سوپرمارکت" icon={
                        <Link  to="history">   
                          <img className='super-app-icon' src='./buttom_navigation_icon/Market.png'></img>
                      </Link>
                  } />
                  <BottomNavigationAction label="اسنپ‌باکس" icon={
                        <Link  to="history">  
                          <img className='super-app-icon' src='./buttom_navigation_icon/Box2.png'></img>
                        </Link>
                  } />
                </BottomNavigation>
              </Paper>

            </Container>
        </>
  );
}

