import UserCard from '@/components/UserCard'
import { Loader } from 'lucide-react'
import React from 'react'

const Page = () => {
  const isLoading = false
  return (
    <div className="flex flex-col flex-1 items-center gap-10 h-screen overflow-scroll py-10 px-[3.3%] sm:px-5 md:px-8 lg:p-14 custom-scrollbar">
      <div className="max-w-5xl flex flex-col items-start w-full gap-6 md:gap-9">
        <h2 className='font-bold text-[24px] sm:text-[28px] text-left w-full'>All Users</h2>
        {isLoading  ? (
          <Loader />
        ) : (
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 max-w-5xl">
            {/* {creators?.documents.map((creator) => ( */}
              <li key={''} className="flex-1 min-w-[200px] w-full sm:max-w-[100%]">
                <UserCard user={""} />
              </li>
              <li key={''} className="flex-1 min-w-[200px] w-full sm:max-w-[100%]">
                <UserCard user={""} />
              </li>
              <li key={''} className="flex-1 min-w-[200px] w-full sm:max-w-[100%]">
                <UserCard user={""} />
              </li>
              <li key={''} className="flex-1 min-w-[200px] w-full sm:max-w-[100%]">
                <UserCard user={""} />
              </li>
            {/* ))} */}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Page