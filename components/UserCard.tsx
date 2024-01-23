import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const UserCard = ({ user }: any) => {
  return (
    <Link href={`/profile/${user.$id}`} className="flex justify-center items-center flex-col gap-4 border border-dark-4 rounded-lg px-5 py-8">
      <Image
        src={user.imageUrl || "/profile.jpeg"}
        width={500}
        height={500}
        alt="creator"
        className="rounded-full w-14 h-14 border-2"
      />

      <div className="flex justify-center items-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          Abdulloh Abdujabborov {user.username}
        </p>
      </div>

      <Button type="button" size="sm" className="px-5">
        Follow
      </Button>
    </Link>
  );
};

export default UserCard;
