import React from 'react';
import style from './Info.module.css';
import Serf from '../../assets/serf.png';

const Info = () => {
  return (
    <div className={style.info}>
      <div className='container'>
        <div className={style.info_inner}>
          <div className={style.info_top}>
            <p>
              After our well received Fly Air Pocket Edition we’re adding the
              respective touring iSUP to our Range – the Ray Air Pocket Edition!
              The ultra travel-friendly touring iSUP is built in a tough but
              light construction that allows it to be packed into a backpack
              half the size of a regular iSUP.
              <button className='video_btn'>
                <svg
                  width='70'
                  height='70'
                  viewBox='0 0 70 70'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M52.6733 34.5L26.1634 49.6554V19.3446L52.6733 34.5Z'
                    fill='white'
                  />
                  <circle
                    cx='35'
                    cy='35'
                    r='34'
                    stroke='white'
                    stroke-width='2'
                  />
                </svg>

                <span>Play video</span>
              </button>
            </p>
            <p>
              With a thinner deck pad and tough but flexible construction, the
              Ray Air Pocket Edition can be rolled and packed into a much
              narrower bag, making it extremely easy to store and transport.
              Based on our highly versatile Ray Air 11’6’’, the efficient shape
              is packed with volume - offering safe, stable paddling and superb
              glide – which makes it the perfect iSUP for everyone paddling some
              distance. With its minimal weight and dimensions nothing comes
              close the convenient handling of our Pocket Edition iSUPs!
            </p>
            <img src={Serf} alt='/' />
          </div>
          <div className={style.specs}>
            <h3>SPECS</h3>
            <ul>
              <li>
                <p>BOARD</p>
                <p>RAY AIR POCKET 11'6"X31"</p>
              </li>
              <li>
                <p>VOLUME</p>
                <p>299 L</p>
              </li>
              <li>
                <p>WIDTH</p>
                <p>31" / 78.7 CM</p>
              </li>
              <li>
                <p>LENGTH</p>
                <p>11'6'' / 350.5 CM</p>
              </li>
              <li>
                <p>THICKNESS</p>
                <p>6” / 15 CM</p>
              </li>
              <li>
                <p>WEIGHT</p>
                <p>8.5 KG</p>
              </li>
              <li>
                <p>FITTINGS</p>
                <p>2X FCS FIN SYSTEM / 2 X 4.5" CLICK FIN</p>
              </li>
              <li>
                <p>REC. USER WEIGHT</p>
                <p>UP TO 100 KG</p>
              </li>
              <li>
                <p>MASTFOOT INSERT</p>
                <p>NO</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
