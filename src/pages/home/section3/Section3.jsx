import React,{useEffect, useState} from 'react'
import styles from "./styles.module.css"
import Slider from './slider/Slider'
import SliderMob from './slider/SliderMob'
import { useLocation } from 'react-router-dom';

const Section3 = () => {
    const [mobile,setMobile]=useState(false);
    useEffect(() => {
      const handleResize = () => {
        setMobile(window.innerWidth <= 768);
      };

      // Initial check
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
          const section = document.querySelector(location.hash);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);
    return (
        <div id="ourFleet" className='flex flex-col gap-[4rem]  lg:gap-[7rem]'>
            <div className='flex flex-col items-center gap-[1rem]'>
                <h4 className={styles.heading1}>Our Services</h4>
                <h1 className={styles.heading2}>Explore our Aircraft</h1>
            </div>
            <div>
                {mobile?<SliderMob/>:<Slider/>}
            </div>
        </div>
      )
}

export default Section3