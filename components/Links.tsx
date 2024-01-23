"use client"
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LeftBarLinks = () => {
    const pathname = usePathname()

  return (
        <ul className='flex flex-col gap-3'>
          {
            sidebarLinks.map((link: INavLink) => {
              const isActive = link.route === pathname;

              return (
                <li key={link.label} className={`rounded-lg text-[16px] font-medium leading-[140%] hover:bg-primary transition group ${isActive && 'bg-primary'}`}>
                  <Link href={link.route} 
                  className={`flex gap-4 items-center justify-start p-4 font-[500] group-hover:text-white ${isActive && 'text-white'}`}>
                    {link.imgURL}
                    {link.label}
                  </Link>
                </li>
              )
            })
          }
        </ul>
  )
}

export default LeftBarLinks