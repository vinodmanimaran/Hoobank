"use client";

import React from 'react'
import Button from './Button';
import { card } from '@/assets';
import styles, { layout } from '@/style';
import Image from 'next/image';


const CardDeal = () => {
  return (
    <section className={layout.section}>
<div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
    Simplify Your 
        <br className="sm:block hidden"/>
        Credit Card Search    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Tired of navigating complex credit card options? Our user-friendly platform streamlines the process of finding the perfect credit card deal tailored to your preferences. Let us handle the details while you focus on the benefits – from rewards to competitive interest rates.
    </p>
            <Button styles={`mt-10`}/>
        </div>
        <div className={layout.sectionImg}>
            <Image src={card} alt="billing" className="w-[100%] h-[100%]"/>
        </div>


    </section>
  )
}

export default CardDeal