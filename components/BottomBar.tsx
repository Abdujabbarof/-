"use client"
import { bottombarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BottomBar = () => {
  const pathname = usePathname()

  return (
    <section className='z-50 flex justify-between w-full sticky bottom-0 rounded-t-[20px] bg-background px-[3.3%] sm:px-5 py-4 md:hidden'>
          {
            bottombarLinks.map((link) => {
              const isActive = link.route === pathname;

              return (
                <Link href={link.route} key={link.label}
                  className={`${isActive && 'bg-primary text-white rounded-[10px]'} flex center justify-center items-center flex-col gap-[1] py-2 px-2 transition`}>
                    {link.imgURL}
                  <p className='tiny-medium hidden sm:inline-block text-light text-[14px]'>{link.label}</p>
                </Link>
              )
            })
          }
    </section>
  )
}

export default BottomBar