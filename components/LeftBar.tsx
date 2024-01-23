import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import LeftBarLinks from './Links';
import { LogOut } from 'lucide-react';

const LeftBar = () => {
  
  return (
    <nav className='hidden md:flex px-6 py-8 h-screen flex-col justify-between min-w-[270px] w-full max-w-[320px] border-r
     bg-dark-2'>
      <div className='flex flex-col gap-9'>
        <Link href={'/'} className='flex gap-3 items-center'>
          <h2 className='text-4xl font-medium'>Social<span className='font-bold text-primary'>Gram</span></h2>
        </Link>

        <Link href={`/profile/`} className='flex gap-3 items-center'>
          <Image src={"/profile.jpeg"} alt="profile" className='h-14 w-14 rounded-full object-cover border-2' width={500} height={500} />
          <div className='flex flex-col'>
            <p className='text-[18px] font-bold leading-[140%]'>Abdujabbarof</p>
            <p className='text-[14px] font-normal leading-[140%] text-light-3'>Abdujabborov</p>
          </div>
        </Link>

        <LeftBarLinks />
      </div>

      <Button variant={'ghost'}  className='flex gap-4 items-center justify-start hover:bg-transparent' >
        <LogOut />
        <p className='text-[14px] font-medium leading-[140%] lg:text-[16px] lg:font-medium lg:leading-[140%]'>Logout</p>
      </Button>
    </nav>
  )
}

export default LeftBar