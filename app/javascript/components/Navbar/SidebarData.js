import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
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
    title: "Hanzi Cards",
    path: "/cards/hanzis/1",
    icon: <ImListNumbered />,
    cName: "nav-text",
  },
  {
    title: "Kanji Cards",
    path: "/cards/kanjis/1",
    icon: <ImListNumbered />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsInfoSquare />,
    cName: "nav-text",
  }
];
