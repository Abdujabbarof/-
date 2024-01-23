"use client"
import { Loader } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';
 

const PostStats = ({ post, userId }: any) => {
    const isTrue = true
    const isSavingPost = false
    
  return (
    <div className="flex justify-between items-center z-20 mt-2">
        <div className="flex justify-start items-center gap-2 mr-5">
            {isTrue ? <Icon fontSize={28} icon="icon-park-solid:like" className="cursor-pointer text-red-500" /> : <Icon className="cursor-pointer" fontSize={28} icon="icon-park-outline:like" />}
            <p className="font-medium text-[16px] lg:text-[18px]">{10} likes</p>
        </div>

        <div className="flex gap-2 cursor-pointer">
            {isSavingPost ? <Loader width={28} height={28} /> : isTrue ? <Icon fontSize={28} icon="ion:bookmark" /> : <Icon fontSize={28} icon="mingcute:bookmark-line" />}
        </div>
    </div>
  )
}

export default PostStats