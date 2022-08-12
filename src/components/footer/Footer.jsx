import React from 'react';
import style from './Footer.module.css';
import Insta1 from '../../assets/insta1.jpg';
import Insta2 from '../../assets/insta2.jpg';
import Insta3 from '../../assets/insta3.jpg';
import Insta4 from '../../assets/insta4.jpg';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='container'>
        <div className={style.footer_inner}>
          <div className={style.footer_top}>
            <form>
              <h3>CONTACT US</h3>
              <input type='text' placeholder='NAME' />
              <input type='email' placeholder='E-MAIL' />
              <button type='submit'>SEND</button>
            </form>
            <a href='/'>
              <svg
                width='371'
                height='81'
                viewBox='0 0 371 81'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0 52.9245L54.5131 0V17.7778C54.5131 18.806 54.0925 19.792 53.3437 20.5189L9.98256 62.6163L0 52.9245ZM16.679 69.1175L54.5131 32.3858V50.1638C54.5131 51.1918 54.0925 52.1778 53.3437 52.9047L36.6446 69.1175L39.9308 72.308L49.9136 82H29.9481L26.6616 78.8093L16.679 69.1175ZM360.948 52.8369L370.64 59.5223C366.089 65.3563 358.99 69.1089 351.015 69.1089C337.278 69.1089 326.143 57.9799 326.143 44.2516C326.143 30.5234 337.278 19.3946 351.015 19.3946C358.99 19.3946 366.089 23.147 370.64 28.9812L360.948 35.6665C358.562 32.7673 354.995 30.9211 351.015 30.9211C343.847 30.9211 338.016 36.9011 338.016 44.2516C338.016 51.6022 343.847 57.5824 351.015 57.5824C354.995 57.5824 358.562 55.7362 360.948 52.8369ZM98.2016 39.5287H118.253L114.422 50.466H98.2016V69.1087H86.4974V19.3948H125.304L121.474 30.3319H98.2016V39.5287ZM263.783 19.3948H301.822V30.3319H288.655V69.1087H276.95V30.3319H263.783V19.3948ZM306.878 69.1089H318.857V19.3948H306.878V69.1089ZM236.63 50.4217L242.556 32.3915L248.481 50.4217H236.63ZM235.094 19.3948L217.684 69.1087H230.486L233.026 61.3589H252.086L254.626 69.1087H267.427L250.017 19.3948H235.094ZM201.299 19.3948H213.004V69.1087H204.225L184.474 42.1212V69.1087H172.77V19.3948H181.548L201.299 46.3823V19.3948ZM137.292 50.4217L143.218 32.3915L149.144 50.4217H137.292ZM135.757 19.3948L118.346 69.1087H131.148L133.688 61.3589H152.748L155.288 69.1087H168.09L150.679 19.3948H135.757Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>
          <p>INSTAGRAM</p>
          <div className={style.footer_social_gallery}>
            <img src={Insta1} alt='/' />
            <img src={Insta2} alt='/' />
            <img src={Insta3} alt='/' />
            <img src={Insta4} alt='/' />
          </div>
          <ul>
            <li>
              <a href='/'>COPYRIGHT 2022</a>
            </li>
            <li>
              <a href='/'>ALL RIGHTS RESERVED</a>
            </li>
            <li>
              <a href='/'>COOKIE SETTINGS</a>
            </li>
            <li>
              <a href='/'>PRIVACY STATEMENTS</a>
            </li>
            <li>
              <a href='/'> CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
