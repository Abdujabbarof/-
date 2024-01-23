// import PostForm from '@/components/Forms'
import PostForm from '@/components/Forms'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
        <div className="max-w-5xl flex items-start gap-3 justify-start w-full">
          <h2 className='font-bold text-[24px] sm:text-[28px] text-left w-full'>Create post</h2>
        </div>

        <PostForm action="create" />
      </div>
    </div>
  )
}

export default Page