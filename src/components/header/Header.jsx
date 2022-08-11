import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.header_top}>
          <a href='/#'>
            <svg
              width='154'
              height='35'
              viewBox='0 0 154 35'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.76709 23.1069L24.0054 0.929199V8.37888C24.0054 8.80975 23.8262 9.22293 23.507 9.52755L5.02255 27.1682L0.76709 23.1069ZM7.87719 29.8925L24.0054 14.5003V21.9501C24.0054 22.3808 23.8262 22.794 23.507 23.0986L16.3883 29.8925L17.7892 31.2295L22.0447 35.2908H13.5336L12.1327 33.9538L7.87719 29.8925ZM154.636 23.0702L158.767 25.8717C156.827 28.3164 153.801 29.8889 150.401 29.8889C144.545 29.8889 139.799 25.2254 139.799 19.4726C139.799 13.7199 144.545 9.05641 150.401 9.05641C153.801 9.05641 156.827 10.6288 158.767 13.0736L154.636 15.8751C153.618 14.6602 152.098 13.8865 150.401 13.8865C147.346 13.8865 144.86 16.3924 144.86 19.4726C144.86 22.5528 147.346 25.0588 150.401 25.0588C152.098 25.0588 153.618 24.2851 154.636 23.0702ZM42.6294 17.4935H51.1771L49.5442 22.0767H42.6294V29.8888H37.64V9.05649H54.1829L52.55 13.6396H42.6294V17.4935ZM113.215 9.05649H129.431V13.6396H123.818V29.8888H118.828V13.6396H113.215V9.05649ZM131.586 29.8889H136.692V9.05649H131.586V29.8889ZM101.64 22.0581L104.166 14.5027L106.692 22.0581H101.64ZM100.985 9.05649L93.5635 29.8888H99.0207L100.103 26.6413H108.229L109.311 29.8888H114.769L107.347 9.05649H100.985ZM86.5789 9.05649H91.5683V29.8888H87.8263L79.4065 18.5799V29.8888H74.4171V9.05649H78.1591L86.5789 20.3654V9.05649ZM59.2934 22.0581L61.8194 14.5027L64.3454 22.0581H59.2934ZM58.6387 9.05649L51.2169 29.8888H56.674L57.7567 26.6413H65.8821L66.9648 29.8888H72.4219L65.0002 9.05649H58.6387Z'
                fill='#262C27'
              />
            </svg>
          </a>
          <button>BUY</button>
          <a className={style.header_phone} href='tel:+17777777'>
            +1 777 77 77
          </a>
        </div>
        <div className={style.header_content}>
          <div className={style.header_contentBox}>
            <h1>RAY AIR POCKET</h1>
            <p>INFLATABLE SUP BOARD</p>
            <p>SIZES: 11'6"X31"</p>
          </div>
          <p
            className={`${style.header_decorTextOne} ${style.header_decorText}`}
          >
            DOM
          </p>
          <p
            className={`${style.header_decorTextTwo} ${style.header_decorText}`}
          >
            FREE
          </p>
          <p
            className={`${style.header_decorTextThree} ${style.header_decorText}`}
          >
            PACK SMALL FOR BIG ADVENTURES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
