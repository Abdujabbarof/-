
import GridPostList from '@/components/GridPostList'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  const currentUser = true
  return (
    <div className="w-full h-screen flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="flex gap-2 w-full max-w-5xl">
        <h2 className='font-bold text-[24px] sm:text-[28px] text-left w-full'>Saved posts</h2>
      </div>

      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {!currentUser ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList posts={[{}]} showStats={true} />
          )}
        </ul>
      )}
    </div>
  )
}

export default Page