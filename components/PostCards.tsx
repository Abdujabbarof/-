"use client"
import { formatTimestamp } from '@/lib/utils'
import PostStats from './PostStats'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'

const PostCards = ({ post }: { post: any }) => {
    const [extended, setextended] = useState<boolean>(true)

    const user = {
        name: "Abdulloh",
        id: 123
    }
    

  return (
    <div className='rounded-lg border border-dark-4 p-[3.3%] sm:p-5 lg:p-7 w-full max-w-screen-sm'>
        <div className="flex-between">
            <div className='flex items-center gap-3'>
                <Link href={`/update-post/$`}>
                    <Image src={'/profile.jpeg'} alt="creator" width={500} height={500} className='rounded-full border-2 w-11 h-11 lg:w-12 lg:h-12' />
                </Link>

                <div className="flex flex-col">
                    <p className='font-bold lg:text-[18px]'>{user.name}</p>
                    <div className='flex justify-start items-center gap-2 text-light-3'>
                        <p className='font-semibold text-[14px] lg:text-[16px]'>{formatTimestamp('')}</p>
                        -
                        <p className='font-semibold text-[14px] lg:text-[16px]'>{post?.location}</p>
                    </div>
                </div>
            </div>

            <Link href={`/update-post/${post?.$id}`} className={`${'hidden'}`}> 
                <Image src={'/assets/icons/edit.svg'} alt="edit icon" width={500} height={500} />
            </Link>
        </div>

                <div className='font-medium lg:font-medium py-2'>
                    <ul className='flex gap-1 mt-1'>
                        {/* {
                            post?.tags.map((tag: string) => (
                                <li key={tag} className='text-light-3'>#{tag}</li>
                            ))
                            
                        } */}
                        <li className=''>#Loading</li>
                    </ul>
                </div>
            <Link href={`/post/${post.$id}`}>

                <Image src={post.imageUrl || '/profile.jpeg'} width={1000} height={1000} className='w-full border' alt="" />
            </Link>


            <PostStats post={post} userId={user.id} />

            <div className='flex items-end justify-start'>
                <p className={`text-[14px] md:text-[16px] w-full text-justify mt-2 ${extended && "truncate"}`}><span className='font-semibold'>{user.name}:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic, in unde aspernatur reiciendis odit.</p>
                {extended && <Button variant={"link"} className='p-0 hover:no-underline text-[14px] text-accent-foregorund h-auto m-0' onClick={() => setextended(prev => !prev)}>more</Button>}
            </div> 
    </div>
  )
}

export default PostCards