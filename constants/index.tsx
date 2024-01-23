import { Icon } from '@iconify/react';

export const sidebarLinks = [
    {
      imgURL: <Icon fontSize={25} icon="mingcute:home-2-line" />,
      route: "/",
      label: "Home",
    },
    {
      imgURL: <Icon icon="humbleicons:chat" fontSize={26} />,
      route: "/chats",
      label: "Chats",
    },
    {
      imgURL: <Icon fontSize={25} icon="material-symbols:explore-outline-rounded" />,
      route: "/explore",
      label: "Explore",
    },
    {
      imgURL: <Icon fontSize={25} icon="octicon:people-16" />,
      route: "/all-users",
      label: "People",
    },
    {
      imgURL: <Icon fontSize={25} icon="mingcute:bookmark-line" />,
      route: "/saved",
      label: "Saved",
    },
    {
      imgURL: <Icon fontSize={25} icon="icon-park-solid:add-pic" />,
      route: "/create-post",
      label: "Create Post",
    },
  ];

export const LogOut = <Icon fontSize={25} icon="ic:baseline-log-out" />
  
  export const bottombarLinks = [
    {
      imgURL: <Icon fontSize={32} icon="mingcute:home-2-line" />,
      route: "/",
      label: "Home",
    },
    {
      imgURL: <Icon icon="humbleicons:chat" fontSize={33} />,
      route: "/chats",
      label: "Chats",
    },
    {
      imgURL: <Icon fontSize={32} icon="material-symbols:explore-outline-rounded" />,
      route: "/explore",
      label: "Explore",
    },
    {
      imgURL: <Icon fontSize={32} icon="octicon:people-16" />,
      route: "/all-users",
      label: "People",
    },
    // {
    //   imgURL: <Icon fontSize={32} icon="mingcute:bookmark-line" />,
    //   route: "/saved",
    //   label: "Saved",
    // },
    {
      imgURL: <Icon fontSize={32} icon="icon-park-solid:add-pic" />,
      route: "/create-post",
      label: "Create",
    },
  ];