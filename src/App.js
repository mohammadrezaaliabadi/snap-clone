import logo from './logo.svg';
import "./fonts/IRANSansXFaNum-regular.woff2"
import './App.css';
import { MdArrowForward } from "react-icons/md";
const data = [
    {
      name:"علی خدنگی",
      car:"پراید",
      rate:"خیلی خوب",
      mony:"۱۷۵٬۰۰۰ ریال",
      date:"سفر پنج‌شنبه ظهر ۲۲ تیر",
      start:"بیرجند، بلوار مدرس بعد از میدان اول مدرس، بانک سپه",
      end:"بیرجند، بلوار مسافر، خودپرداز بانک تجارت",
      img:"./ride.png",
      prof:"./7O9oYe6KgwaN5KzgvZyP-2.jpg",
      type:"اسنپ",
      pay:"۲۰۴٬۳۹۹ ریال",
      off:"۵٬۶۰۱ ریال",
      totalPay:"۲۱۰٬۰۰۰ ریال",
      sdate:"۲۲ تیر ۱۴۰۲",
      stime:"۱۲:۴۹",
      code:"SNP-230713-67604-2957"
  
  
    },
    {
      name:"2علی خدنگی",
      car:"پراید",
      rate:"خیلی خوب",
      mony:"۱۷۵٬۰۰۰ ریال",
      date:"سفر پنج‌شنبه ظهر ۲۲ تیر",
      start:"بیرجند، بلوار مدرس بعد از میدان اول مدرس، بانک سپه",
      end:"بیرجند، بلوار مسافر، خودپرداز بانک تجارت",
      img:"./ride.png",
      prof:"./7O9oYe6KgwaN5KzgvZyP-2.jpg",
      type:"اسنپ",
      pay:"۲۰۴٬۳۹۹ ریال",
      off:"۵٬۶۰۱ ریال",
      totalPay:"۲۱۰٬۰۰۰ ریال",
      sdate:"۲۲ تیر ۱۴۰۲",
      stime:"۱۲:۴۹",
      code:"SNP-230713-67604-2957"
  
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Main-header'>
          <div className='Menu-header'>
          </div>
          <h6 className='Title-header'>سفرها</h6>
          <div className='Nav-header'>
          <MdArrowForward className='Btn-icon'/>
            </div>
        </div>
      </header>
      <div className='Container'>
        <div className='History-header'>
          <div className='History-header-item'>
            <div className='History-header-item-header'>
              <img className='History-header-item-image' 
              src="./ride-history-km.webp"  height="65px" width="85px"/>
            </div>
            <h6 className='History-header-item-title'>5</h6>
            <p className='History-header-item-detail'>ساغت</p>
            <p className='History-header-item-detail'>با اسنپ</p>
            
          </div>
          <div className='History-header-item'>
            <div className='History-header-item-header'>
              <img className='History-header-item-image' 
              src="./ride-history-quantity.webp"  height="65px" width="85px"/>
            </div>
            <h6 className='History-header-item-title'>31</h6>
            <p className='History-header-item-detail'>سفر</p>
            <p className='History-header-item-detail'>با اسنپ</p>
          </div>
          <div className='History-header-item'>
            <div className='History-header-item-header'>
              <img className='History-header-item-image' 
              src="./ride-history-hour.webp"  height="65px" width="85px"/>
            </div>
            <h6 className='History-header-item-title'>162</h6>
            <p className='History-header-item-detail'>کیلومتر</p>
            <p className='History-header-item-detail'>با اسنپ</p>
          </div>
        </div>


        {data.map(trip=>(
          <div className='History-item' >
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
                  <img className='History-item-prof-image' src="./7O9oYe6KgwaN5KzgvZyP-2.jpg"/>
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
    </div>
  );
}

export default App;
