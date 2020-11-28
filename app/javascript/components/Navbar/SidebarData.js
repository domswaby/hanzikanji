import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { GiCardRandom } from "react-icons/gi";
import { ImListNumbered } from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Hanzi List",
    path: "/list/hanzis/1",
    icon: <GiCardRandom />,
    cName: "nav-text",
  },
  {
    title: "Kanji List",
    path: "/list/kanjis/1",
    icon: <GiCardRandom />,
    cName: "nav-text",
  },
  {
    title: "Cards",
    path: "/kanji/1",
    icon: <ImListNumbered />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
