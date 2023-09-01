"use client";
import { apple, bill, google } from '@/assets';
import styles, { layout } from '@/style';
import Image from 'next/image';
import React from 'react';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        {/* gradients */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      {/* gradient ends */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Empower Your Financial Journey
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our tailored financial solutions provide you with the tools to take control of your billing and invoicing. Whether you&apos;re an individual or a business, our expert team is here to help you manage your finances effectively and efficiently.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image src={apple} alt="google_play" className='w-[128.86.17px] h-[42.05px] mr-5 object-contain cursor-pointer' />
          <Image src={google} alt="google_play" className='w-[144.17px] h-[43.08px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default Billing;
