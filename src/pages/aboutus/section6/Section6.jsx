import React from 'react'
import styles from "./styles.module.css"


const Section6 = () => { 
  return (
    <div className={`${styles.container} flex flex-col items-center gap-[4rem] lg:gap-[7rem]`}>
        <div className='flex  items-center '>
            {/* <h4 className={styles.heading1}>Our Directors</h4> */}
            <h1 className={styles.heading2}>Our Directors</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[5rem] w-[80%]'>
            <div className='flex items-center w-full justify-center'>
                {/* <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/bjp1.svg`} alt="img" style={{width:"100%",height:"auto",objectFit:"cover"}}/> */}
                <div className={styles.btn}>
                <p className={styles.intro}>Mr. Umesh Manjul</p></div>
            </div>
            <div className='flex items-center w-full justify-center'>
                {/* <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/bjp2.svg`} alt="img" style={{width:"100%",height:"auto",objectFit:"cover"}}/> */}
                <div className={styles.btn}>
                <p className={styles.intro}>Mrs. Manu</p> </div>
                </div>
            
           
        </div>
    </div>
  )
}

export default Section6