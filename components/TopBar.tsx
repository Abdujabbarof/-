import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { ModeToggle } from './Mode-Toggle'
// import { ModeToggle } from './ui/togglemode'

const TopBar = () => {
  return (
    <section className='sticky top-0 z-50 md:hidden w-full border-b bg-background'>
      <div className='flex w-full py-4 px-[3.3%] sm:px-5 justify-between'>
        <Link href={'/'} className='flex gap-3 items-center'>
          <h2 className='text-2xl font-semibold sm:text-3xl'>Social<span className='font-bold text-primary'>Gram</span></h2>
        </Link>

        <div className='flex gap-2 items-center justify-center'>
          {/* <Button variant={'ghost'} className='flex gap-4 items-center justify-start hover:bg-transparent hover:text-white'>
            <LogOut />
          </Button> */}
          <ModeToggle />
          <Link href={`/profile/`} className='flex-center gap-3'>
            <Image src={'/profile.jpeg'} alt="progile" className='h-10 w-10 rounded-full border-2' width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TopBar