"use client";

import { clients } from '@/constants'
import styles from '@/style'
import React from 'react'
import Image from 'next/image'


const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`} id="clients">
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client)=>(
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                    <Image src={client.logo} alt="client-logo" className="sm:w-[192px] w-[100px] object-contain"/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Client