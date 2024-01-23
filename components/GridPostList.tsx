import Link from "next/link"
import PostStats from "./PostStats"
import Image from "next/image"

const GridPostList = ({ posts, showUser = true, showStats = true }: any) => {
    const user = {}
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
        {
            [{}, {}, {}, {}]?.map((item) => (
                <li key={''} className="relative min-w-80 w-full border flex flex-col p-[3.3%] rounded-lg">
                    <Link href={`/post/${''}`} className="w-full">
                        <Image src={'/profile.jpeg'} width={600} height={600} alt="posts" className="h-full w-full border object-cover" />
                    </Link>

                    <div className="w-full">
                        {
                            showUser && (
                                <div className="flex items-center justify-start gap-2 flex-1 mt-2">
                                    <Image src={'/profile.jpeg'} width={100} height={100} alt="creator image" className="h-8 w-8 rounded-full border" />
                                    <p className="line-clamp-1">{'Abdulloh Abdujabborov'}</p>
                                </div>
                            )
                        }
                        {
                            showStats && (
                                <PostStats post={{}} userId={''} />
                            )
                        }
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default GridPostList