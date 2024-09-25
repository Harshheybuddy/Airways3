import React from 'react'
import styles from "./styles.module.css"
import { Link, useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();
    const list=[
        {
            id:1,
            heading:"Global Fleet",
            list1:["Helicopters","Turbo prop","Mid Size Jet","Large Jet"]
        },
        {
            id:2,
            heading:"Company",
            list2:["About","Term of Services","Privacy Policy","Licensed & Regulation"]
        },
        {
            id:3,
            heading:"Contact Information",
            phones:["+91-8010102004","+91-9582777176","+91-9582777171",],
            email:"info@kaushambiairways.com",
            address:"HR-48A, GALI NUMBER 2, Pul Prahladpur, New Delhi, South East Delhi, Delhi, 110044"
        },
    ]

    const goToSection = () => {
        navigate('/#ourFleet'); // Navigates to About page's section
      };
  return (
    <div>
    <div className='py-12 lg:py-14 px-4 bg-white mt-[5rem]'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-[2rem] lg:gap-[0rem]'>
            <div className='lg:col-span-2 flex flex-col items-center justify-between gap-[1rem] lg:gap-[4rem]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/logo2.svg`} alt="img" style={{height:"100%",objectFit:"contain"}} className='w-[50%] lg:w-[30%]'/>
                <div className=' text-center lg:text-left'>
                <p className={styles.subtext}>Kaushambi® Airways Pvt. Ltd.</p>
                <p className={styles.subtext}>Kaushambi |  Preferred Air Partner</p>
                <p className={styles.subtext}>CIN NO. U63030DL2022PTC395389</p>
                </div>
            </div>

            <div className='flex flex-col gap-[0.5rem] lg:gap-[2rem] items-center lg:items-start'>
                <h4 className={styles.heading}>
                    {list[0].heading}
                </h4>
                <ul className='list-none flex flex-col lg:items-start gap-[0.5rem] lg:gap-[1rem]  text-center lg:text-left'>
                    {
                        list[0].list1.map((item,index)=>{
                            return <a href="/#ourFleet"> <li className={styles.list}>{item}</li></a>
                        })
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-[0.5rem] lg:gap-[2rem] items-center lg:items-start'>
                <h4 className={styles.heading}>
                    {list[1].heading}
                </h4>
                <ul className='list-none flex flex-col lg:items-start gap-[0.5rem] lg:gap-[1rem]  text-center lg:text-left'>
                    {
                        list[1].list2.map((item,index)=>{
                            {return item==="About"?                        
                            <Link to="/aboutus"><li className={styles.list}>{item}</li></Link>:
                        item==="Term of Services"? <li className={styles.list} style={{cursor:"pointer"}} onClick={goToSection}>{item}</li>
                        :<li className={styles.list}>{item}</li>}
                        })
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-[0.5rem] lg:gap-[2rem] items-center lg:items-start'>
                <h4 className={styles.heading}>
                    {list[2].heading}
                </h4>
                <div className='flex items-start gap-[0.5rem]'>
                    <div className='w-[1rem] mt-[0.2rem]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/phone.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
                </div>
                <ul className='list-none text-center lg:text-left '>
                    {
                        list[2].phones.map((item,index)=>{
                            return <li className={styles.list} style={{marginTop:"0rem"}}>{item}</li>
                        })
                    }
                </ul>
                </div>
               <div className='flex items-start gap-[0.5rem]'>
                <div className='w-[1rem] mt-[0.3rem]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/email.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
                </div>
                <p className={styles.list} style={{marginTop:"0rem"}}>{list[2].email}</p>
                </div>
                <div className='flex items-start gap-[0.5rem] text-center lg:text-left'>
                <div className='w-[1.5rem] mt-[0.3rem] '>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/address.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
                </div>
                <p className={`${styles.list}  `} style={{marginTop:"0rem"}}>{list[2].address}</p>
                </div>
            </div>
        </div>
    </div>
    <div  className='bg-[#4F4F4F] py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[6rem] flex flex-col lg:flex-row items-center justify-between gap-[1rem]'>
        <div className='flex items-center flex-col lg:flex-row gap-[0.5rem] lg:gap-[1rem]'>
          <p className={styles.copyrightpara} >
            @2023 Kaushambi. All Rights Reserved.
          </p>
          <p className={styles.copyrightpara}>Terms & Conditions.</p>
        </div>
        <div className={styles.contactdiv}>
          <div className={styles.socialdiv}>
            <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/facebook.svg`} alt="img" style={{ height: "50%" }} />
          </div>
          <div className={styles.socialdiv}>
            <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/linkedin.svg`} alt="img" style={{ height: "50%" }} />
          </div>
          <div className={styles.socialdiv}>
            <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/twitter.svg`} alt="img" style={{ height: "50%" }} />
          </div>
          <div className={styles.socialdiv}>
            <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/youtube.svg`} alt="img" style={{ height: "50%" }} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer