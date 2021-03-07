import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from "react-icons/ri";



export const SideBarData = [
    {
        title:"Home",
        icon: <AiIcons.AiFillHome />,
        link:"/home",
        cName: 'nav-text'
    },
    {
        title:"Sync",
        icon: <FaIcons.FaSyncAlt/>,
        link:"/sync",
        cName: 'nav-text'
    },
    {
        title:"History",
        icon: <FaIcons.FaHistory/>,
        link:"/history",
        cName: 'nav-text'
    },
    {
        title:"Mapping",
        icon: <RiIcons.RiGitMergeFill/>,
        link:"/mapping",
        cName: 'nav-text'
    },
    {
        title:"Selective Sync",
        icon: <FaIcons.FaFilter/>,
        link:"/selectivesync",
        cName: 'nav-text'
    }
]



