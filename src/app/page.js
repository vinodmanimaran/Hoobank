"use client";
import React from 'react'
import styles from '../style.js'
import Navbar from '@/components/Navbar.js';

import Footer from '@/components/Footer.js';
import CTA from '@/components/CTA.js';
import Client from '@/components/Client.js';
import Stat from '@/components/Stat.js';
import CardDeal from '@/components/CardDeal.js';
import Billing from '@/components/Billing.js';
import Bussiness from '@/components/Bussiness.js';
import Testimonial from '@/components/Testimonial.js';
import Hero from '@/components/Hero.js';


const page=()=>{
  return(
<div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}><Navbar/>
      </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
<Hero/>
    </div>
  </div>
<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
  <div className= {`${styles.boxWidth}`}>
<Stat/>
<Bussiness/>
  <Billing/>
  <CardDeal/>
      <Testimonial/>
      <Client/>
      <CTA/>
<Footer/>
  </div>
</div>

</div>
  )
}


export default page;                              