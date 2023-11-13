import React, {useState} from 'react';
import "./fonts/IRANSansXFaNum-regular.woff2"
import './App.css';
import { MdArrowForward } from "react-icons/md";
const data = [
    {
      id:1,
      name:"رضا بهدانی",
      car:"سمند سفید",
      rate:"خیلی خوب",
      mony:"250٬۰۰۰ ریال",
      date:"صبح ۲۷ مهر پنجشنبه",
      start:"بیرجند، چهارراه صیاد، بلوار پاسداران بعد از پاسداران 2،اداره پست بیرجند",
      end:"بیرجند، بلوار پیامر اعظم، فرهنگ ،نسترن بعد از نسترن 3،خشک شوی پارسیان",
      img:"./IMG_20231113_090039_259.jpg",
      prof:"./IMG_20231113_085843_872.jpg",
      type:"اسنپ",
      pay:"۲5۰٬۰۰۰",
      off:"۵٬۶۰۱ ریال",
      totalPay:"255٬601 ریال",
      sdate:"27 مهر ۱۴۰۲",
      stime:"11:02",
      code:"SNP-23071-45009-7360"
  
  
    },
    {
      id:2,
      name:"علی ناصحی تبار",
      car:"پراید",
      rate:"خیلی خوب",
      mony:"۱50٬۰۰۰ ریال",
      date:"سفر پنج‌شنبه ظهر ۲۲ مهر",
      start:"بیرجند، محبت بعد از بلوار استاندارد",
      end:"بیرجند، بلوار مسافر، خودپرداز بانک تجارت",
      img:"./ride.png",
      prof:"./7O9oYe6KgwaN5KzgvZyP-2.jpg",
      type:"اسنپ",
      pay:"18۴٬۳۹۹ ریال",
      off:"۵٬۶۰۱ ریال",
      totalPay:"۲۱۰٬۰۰۰ ریال",
      sdate:"۲۲ مهر ۱۴۰۲",
      stime:"۱0:۴۹",
      code:"SNP-230713-67604-2957"
  
    },
    {
      id:3,
      name:"علی خدنگی",
      car:"پراید",
      rate:"خیلی خوب",
      mony:"18۵٬۰۰۰ ریال",
      date:"سفر سشنبه ظهر 20 مهر",
      start:"بیرجند، بلوار مدرس بعد از میدان اول مدرس، بانک سپه",
      end:"بیرجند، بلوار مسافر، خودپرداز بانک تجارت",
      img:"./ride (1).png",
      prof:"./WBPNaj2ZYYBMpDbz5xXR-1.jpg",
      type:"اسنپ",
      pay:"۲1۴٬۳۹۹ ریال",
      off:"۵٬۶۰۱ ریال",
      totalPay:"۲2۰٬۰۰۰ ریال",
      sdate:"۲۲ مهر ۱۴۰۲",
      stime:"۱5:۴۹",
      code:"SNP-230713-67604-2957"
  
  }
]


function App() {

  const [ids,setId] = useState(0)
  const [title,setTitle] = useState("سفرها")

  const inc  = (a,b)=>{
    setTitle(b)
    setId(a)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='Main-header'>
          <div className='Menu-header'>
          </div>
          <h6 className='Title-header'>{title}</h6>
          <div className='Nav-header'>
          <MdArrowForward className='Btn-icon' onClick={()=>inc(0,"سفرها")}/>
            </div>
        </div>
      </header>
      {ids===0?
            <div className='Container'>
            <div className='History-header'>
              <div className='History-header-item'>
                <div className='History-header-item-header'>
                  <img className='History-header-item-image' 
                  src="./ride-history-km.webp"  height="65px" width="85px"/>
                </div>
                <h6 className='History-header-item-title'>35</h6>
                <p className='History-header-item-detail'>ساعت</p>
                <p className='History-header-item-detail'>با اسنپ</p>
                
              </div>
              <div className='History-header-item'>
                <div className='History-header-item-header'>
                  <img className='History-header-item-image' 
                  src="./ride-history-quantity.webp"  height="65px" width="85px"/>
                </div>
                <h6 className='History-header-item-title'>231</h6>
                <p className='History-header-item-detail'>سفر</p>
                <p className='History-header-item-detail'>با اسنپ</p>
              </div>
              <div className='History-header-item'>
                <div className='History-header-item-header'>
                  <img className='History-header-item-image' 
                  src="./ride-history-hour.webp"  height="65px" width="85px"/>
                </div>
                <h6 className='History-header-item-title'>1193</h6>
                <p className='History-header-item-detail'>کیلومتر</p>
                <p className='History-header-item-detail'>با اسنپ</p>
              </div>
            </div>
    
    
            {data.map(trip=>(
              <div className='History-item' key={trip.id} onClick={()=>inc(trip.id,trip.date)} >
              <img className='History-item-image' src={trip.img}/>
              <div className='History-item-body'>
                <div className='History-item-top'>
                  <div>
                    <div className='History-item-rate'>
                      < p className='History-item-rate-text'>{trip.rate}</p>
                    </div>
                  </div>
                  <div className='History-item-prof'>
    
                    <div className='History-item-prof-body'>
                      <p className='History-item-prof-name'>{trip.name}</p>
                      <p className='History-item-prof-car'>{trip.car}</p>
                    </div>
                    <div className='History-item-prof-pic'>
                      <img className='History-item-prof-image' src={trip.prof}/>
                    </div>
                  </div>
    
                </div>
                <div className='History-item-middle'>
                  <div className='History-item-time'>
                    <p className='History-item-time-text'>{trip.date}</p>
                  </div>
                  <div className='History-item-pay'>
                    <div className='History-item-pay-container'>
                      <p className='History-item-pay-mony'>{trip.mony}</p>
                      <svg className='History-item-pay-icon'  aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"></path><path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"></path></svg>
                    </div>
                  </div>
    
                </div>
                <hr className="Hr1"/>
                <div className='History-item-bottom'>
                  <div className='History-item-dir'>
                    <p className='History-item-dir-text'>{trip.start}</p>
                    <svg aria-hidden="true" color="secondary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="btn-dir1"><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"></path></svg>
                  </div>
                  <div className='History-item-dir'>
                    <p className='History-item-dir-text'>{trip.end}</p>
                    <svg aria-hidden="true" color="primary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="btn-dir2"><path d="M15 6C16.6569 6 18 7.34315 18 9V15C18 16.6569 16.6569 18 15 18H9C7.34315 18 6 16.6569 6 15V9C6 7.34315 7.34315 6 9 6H15ZM13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            ))}
    
          </div>
        :

        <div className='t'>
          <div className='main-detail'>
            <img className="detail-image" src={data[ids-1].img}></img>
            <div className='detail-section-1'>
              <div className='History-item-top'>
                  <div>
                    <div className='History-item-rate'>
                      < p className='History-item-rate-text'>{data[ids-1].rate}</p>
                    </div>
                  </div>
                  <div className='History-item-prof'>
    
                    <div className='History-item-prof-body'>
                      <p className='History-item-prof-name'>{data[ids-1].name}</p>
                      <p className='History-item-prof-car'>{data[ids-1].car}</p>
                    </div>
                    <div className='History-item-prof-pic'>
                      <img className='History-item-prof-image' src={data[ids-1].prof}/>
                    </div>
                  </div>
                </div>
            </div>
            <hr className='Hr1'></hr>
            <div className='detail-section-2' >
                  <div className='detail-item-s2 bs21'>
                    <p className='detail-item-s2-text'>{data[ids-1].start}</p>
                    <svg className='detail-item-s2-icon' aria-hidden="true" color="secondary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"></path></svg>
                  </div>
                  <div className='detail-item-s2 bs22'>
                    <p className='detail-item-s2-text'>{data[ids-1].end}</p>
                    <svg className='detail-item-s2-icon' aria-hidden="true" color="primary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C16.6569 6 18 7.34315 18 9V15C18 16.6569 16.6569 18 15 18H9C7.34315 18 6 16.6569 6 15V9C6 7.34315 7.34315 6 9 6H15ZM13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"></path></svg>
                  </div>
                  <div className='detail-item-s2'>
                    <p className='detail-item-s2-text'>{data[ids-1].mony}</p>
                    <svg className='detail-item-s2-icon'  aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"></path><path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"></path></svg>
                  </div>
            </div>
            <hr className='Hr1'></hr>
            <div className='detail-section-3' >
              <div className='ds3-item'>
                <p className='ds3-item-label'>نوع سرویس</p>
                <p className='ds3-item-data'>{data[ids-1].type}</p>
              </div>
              <div className='ds3-item'>
                <p className='ds3-item-label'>مبلغ پرداختی</p>
                <p className='ds3-item-data'>{data[ids-1].pay}</p>
              </div>
              <div className='ds3-item'>
                <p className='ds3-item-label'>تخفیف(ها)</p>
                <p className='ds3-item-data'>{data[ids-1].off}</p>
              </div>
              <div className='ds3-item'>
                <p className='ds3-item-label'>هزینه کل سفر</p>
                <p className='ds3-item-data'>{data[ids-1].totalPay}</p>
              </div>
              <div className='ds3-item'>
                <p className='ds3-item-label'>تاریخ سفر</p>
                <p className='ds3-item-data'>{data[ids-1].sdate}</p>
              </div>
              <div className='ds3-item'>
                <p className='ds3-item-label'>زمان شروع سفر</p>
                <p className='ds3-item-data'>{data[ids-1].stime}</p>
              </div>
            </div>
            <div className='detail-section-4' >
              <div className='ds4'>
                <p className='ds4-label'>کد سفر</p>
                <p className='ds4-code'>{data[ids-1].code}</p>
              </div>
              <button className='ds4-btn'>
                <span className='ds4-span'>
                  <svg className='ds4-icon' aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
                </span>
                </button>
            </div>
            <hr className='Hr1'></hr>
            <div className='detail-section-4' >
              <div className='ds4'>
                <p className='ds4-label'>رسید سفر</p>
                <p className='ds4-code'>فایل PDF</p>
              </div>
              <button className='ds5-btn'>
                <p className="ds4-text">دانلود</p>
      
                <svg className='ds4-icon' aria-hidden="true" color="secondary" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></svg>
                </button>
            </div>

          </div>
        <footer className='Main-footer'>
          <button className='footer-btn'>
              <svg className="footer-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                <p className="footer-text">تماس با پشتیبانی</p>
          </button>
        </footer>
        </div>


        }

    </div>
  );
}

export default App;
