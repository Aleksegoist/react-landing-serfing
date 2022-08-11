import React from 'react';
import style from './Technology.module.css';
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import ImageMax1 from '../../assets/image_max1.jpg';
import ImageMax2 from '../../assets/image_max2.jpg';
import ImageMax3 from '../../assets/image_max3.jpg';
import ImageMax4 from '../../assets/image_max4.jpg';
import ImageMax5 from '../../assets/image_max5.jpg';
import ImageMax6 from '../../assets/image_max6.jpg';

const Technology = () => {
  return (
    <div className={style.technology}>
      <div className={style.technology_top}>
        <div className='container'>
          <div className={style.technology_top_inner}>
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
            <div className={style.technology_top_box}>
              <h3>MICRO TECHNOLOGY</h3>
              <ol>
                <li>First PVC rail layer </li>
                <li>Second PVC rail layer </li>
                <li>Thin diamond grooving split-pad</li>
                <li>Strong Tarpaulin layer </li>
                <li>V-Drop Stitch core</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className={style.gallery}>
        <div className='container'>
          <div className={style.gallery_inner}>
            <div className={style.gallery_box}>
              <p>
                Our new Micro technology provides a featherweight and quality
                construction that can be rolled and packed into a backpack half
                the width of a standard iSUP package. The reduced pad and our
                twin Click Fin system make it possible to have a regular sized
                iSUP packed into minimal space.
              </p>
              <div className={style.gallery_mini}>
                <img src={Image1} alt='/' />
                <img src={Image2} alt='/' />
                <img src={Image3} alt='/' />
              </div>
            </div>
            <div className={style.gallery_max}>
              <img src={ImageMax1} alt='/' />
              <img src={ImageMax2} alt='/' />
              <img src={ImageMax3} alt='/' />
              <img src={ImageMax4} alt='/' />
              <img src={ImageMax5} alt='/' />
              <p>ENJOY YOUR LIFE</p>
              <img src={ImageMax6} alt='/' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
