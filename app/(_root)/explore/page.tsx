"use client"
import { Input } from '@/components/ui/input'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col flex-1 items-center h-screen overflow-scroll py-10 px-[3.3%] sm:px-5 md:p-14 custom-scrollbar">
      <div className="max-w-5xl flex flex-col items-center w-full gap-6">
        <h2 className='font-bold text-[24px] sm:text-[28px] text-left w-full'>Search Posts</h2>
        <div className="flex items-center gap-1 px-4 w-full rounded-lg border border-primary">
          <Icon fontSize={25} icon="ion:search" className='text-muted-foreground' />
          <Input type="text" placeholder="Search..." className="border-none placeholder:text-light-4 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0" />
        </div>
      </div>

      <div className="flex justify-between items-center w-full max-w-5xl mt-10 mb-7">
        <h2 className="font-bold md:text-[24px]">Popular Today</h2>
      </div>

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {/* {shouldShowSearchResults ? (
          <SearchResults
            isSearchFetching={isSearchFetching}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            searchedPosts={searchedPosts}
          />
        ) : shouldShowPosts ? (
          <p className="text-light-4 mt-10 text-center w-full">End of posts</p>
        ) : posts.pages.map((items, index) => (
          <GridPostList key={`page-${index}`} 
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          posts={[]} />
        ))} */}
      </div>

      {
        (
          <div 
          // ref={ref} 
          className="mt-10">
            <Loader />
          </div>
        )
      }
    </div>
  )
}

export default Page