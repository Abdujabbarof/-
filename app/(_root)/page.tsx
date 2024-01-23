import PostCards from "@/components/PostCards";
import { Loader } from "lucide-react";

export default function Home() {
  const isPostLoading = false
  return (
    // <div className='flex flex-1 h-screen'>
      <div className='flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-[3.3%] sm:px-5 md:px-8 lg:p-14 custom-scrollbar'>
        <div className='max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9'>
          <h2 className='font-bold text-[24px] sm:text-[28px] text-left w-full'>Recent posts</h2>
          {
            isPostLoading ? (
              <Loader />
            ) : (
              <ul className='flex flex-col flex-1 gap-9 w-full'>
                {/* {
                  posts?.documents.map((post: Models.Document) => (
                    ))
                  } */}
                  <PostCards key={"Hello"} post={{}} />
              </ul>
            )
          }
        </div>
      </div>
    // </div>
  )
}
