import React from 'react';
import style from './AirPocket.module.css';
import Bags from '../../assets/bags.jpg';

const AirPocket = () => {
  return (
    <div className={style.airPocket}>
      <div className='container'>
        <div className={style.buy_box}>
          <div className={style.buy_content}>
            <h3>RAY AIR POCKET</h3>
            <ul>
              <li>
                <p className={style.title}>CLICK FINS</p>
                <p>
                  Comes with two 4.5’’ Click Fins – no tools required – fit and
                  remove in seconds
                </p>
              </li>
              <li>
                <p>REDUCED DECK pad</p>
                <p>Reduced area deck pad in standing area to aid packing</p>
              </li>
              <li>
                <p>BACKPACK</p>
                <p>
                  Compact Pocket backpack with easy entry zipper for board,
                  paddle, pump and accessories (fits paddle and also regular
                  pump)
                </p>
              </li>
              <li>
                <p>TOURING SHAPE</p>
                <p>
                  Tried and tested shape based on our popular Ray Air 11’6’’
                </p>
              </li>
              <li>
                <p>EXTREMELY PORTABLE</p>
                <p>Extremely portable, the ultimate travel companion</p>
              </li>
              <div className={style.buy_price}>590 €</div>
            </ul>
            <button>BUY</button>
          </div>
          <img src={Bags} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default AirPocket;
