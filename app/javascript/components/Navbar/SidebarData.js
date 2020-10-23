import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { GiCardRandom } from "react-icons/gi";
import { ImListNumbered } from "react-icons/im";


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome/>,
    cName:'nav-text'
  },
  {
    title: 'Cards',
    path: '/cards',
    icon: <GiCardRandom/>,
    cName:'nav-text'
  },
  {
    title: 'List',
    path: '/hanzis',
    icon: <ImListNumbered/>,
    cName:'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle/>,
    cName:'nav-text'
  }

]
