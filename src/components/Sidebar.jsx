import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

export default function Sidebar() {
   const links = [
      {
         title: "Dashboard",
         icon: AiFillAppstore,
      },
      {
        
         title: "Profile",
         icon: BiNews,
      },
      {
         title: "Bitcoin",
         icon: BiRocket,
      },
      {
         
         title: "USDT",
         icon: FaWallet,
         
      },
      {
         
         title: "Rewards",
         icon: SiGoogleanalytics,
        
      },
      {
         title: "Settings",
         icon: AiFillSetting,
         
      },
      {
         
         title: "Logout",
         icon: BsCashStack,
         
      },
   ];

   return (
      <div className="sidebar">
         <div className="brand">
            <h2>
              <span> WITCO</span> 
            </h2>
         </div>
         <ul className="links">
            {links.map((link) => {
               return (
                  <li>
                  <a href="#">
                   {<link.icon />}
                   {link.title}
                  </a>
                  </li>
               ); 
            })}
         </ul>
      </div>
   );
}

