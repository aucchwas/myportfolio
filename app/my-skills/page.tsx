"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import {Autoplay} from "swiper/modules"

const Page = () => {
  return (
    <div 
    className='h-screen w-screen items-center justify-center bg-cover bg-center'
    style={{backgroundImage: "url(/bg-2.jpg)"}}>
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px] fixed top-[100px] left-[600px]'>
            Skills
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {""} & {""}
            </span> Technologies
          </h1>
        </div>

        <p className='text-gray-400 text-[20px] absolute top-[190px] left-[420px]'>
          These are the Technologies I leaned to use and implemented in projects or assignments
        </p>

        <Swiper
        slidesPerView={5}
        loop = {true}
        autoplay = {{
          delay: 0,
          disableOnInteraction: false
        }}
        speed={5000}
        modules={[Autoplay]}
        className= 'max-w-[80%] absolute top-[300px] left-[200px]'>
            {SkillData.map((skill, index) => (
              <SwiperSlide
              key={index}>
                <Image
                src={skill.Image}
                alt={skill.name}
                height={skill.height}
                width={skill.height}/>
              </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
        slidesPerView={5}
        loop = {true}
        autoplay = {{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        modules={[Autoplay]}
        className= 'max-w-[80%] absolute top-[300px] left-[200px]'>
            {SkillData.map((skill, index) => (
              <SwiperSlide
              key={index}>
                <Image
                src={skill.Image}
                alt={skill.name}
                height={skill.height}
                width={skill.height}/>
              </SwiperSlide>
            ))}
        </Swiper>          
      </div>
    </div>
  )
}

export default Page;