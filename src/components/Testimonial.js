"use client"

import styles from '@/style'
import React from 'react'
import FeedbackCard from './FeedbackCard'
import { feedback } from '@/constants'


const Testimonial = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
        Hear from Our 
 <br className='sm:block hidden'/> Satisfied Clients
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Our dedication to providing top-notch financial solutions has earned the trust of businesses and individuals worldwide. Discover why our clients love partnering with us for their banking needs.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonial