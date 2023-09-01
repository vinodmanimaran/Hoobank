"use client";

import styles, { layout } from '@/style';
import React from 'react'
import Button from './Button';
import { features } from '@/constants';
import Image from 'next/image';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
      

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business ,<br className='sm:block hidden'/> We'll handle the money.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </p>
            <Button styles={`mt-10`}/>

        </div>
        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature,index)=>(
                <FeatureCard key={feature.id}{...feature} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Bussiness