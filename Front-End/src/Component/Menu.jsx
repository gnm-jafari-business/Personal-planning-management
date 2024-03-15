import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

const Menu = () => {
  const [active, setActive] = useState(1);
  const menu = [
    { title: "Profile", icon: <FaRegUser />, id: 0 },
    { title: "Dashboard", icon: <HiOutlineHome />, id: 1 },
    { title: "Add task", icon: <BsPlusCircle />, id: 2 },
  ];
  return (
    <div className="glass-background w-full p-5 relative">
      <ul className="flex justify-center items-center gap-20">
        {menu.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-2 cursor-pointer"
              onClick={() => {
                setActive(item.id);
              }}
            >
              <span
                className={` ${
                  active == item.id
                    ? "flex justify-center items-center absolute glass-background-no-opacity text-white border-b-2 text-3xl p-4   -top-6 w-20 "
                    : "text-5xl"
                }  `}
              >
                {item.icon}
              </span>
              {active === item.id && (
                <span
                  className={`text-lg p-4 ${
                    active == item.id &&
                    "flex justify-center items-center absolute glass-background-no-opacity text-white border-t-2 font-bold  -bottom-6 w-auto "
                  }  `}
                >
                  {item.title}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
    // <div className="menu h-20 glass-background" style={{ color: "#444" }}>
    //   <ul className=" flex justify-center items-center gap-10">
    //     <li
    //       className={`${active == 0 && "active"}`}
    //       onClick={() => {
    //         setActive(0);
    //       }}
    //     >
    //       <div id="marker">
    //         <span></span>
    //       </div>
    //       <a href="#">
    //         <span className="icon-menu">
    //           <HiOutlineHome size={40} />
    //         </span>

    //         <text>Dashboard</text>
    //       </a>
    //     </li>
    //     <li
    //       className={`${active == 1 && "active"}`}
    //       onClick={() => {
    //         setActive(1);
    //       }}
    //     >
    //       <div id="marker">
    //         <span></span>
    //       </div>
    //       <a href="#">
    //         <span className="icon-menu">
    //           <HiOutlineHome size={40} />
    //         </span>
    //         <text>All task</text>
    //       </a>
    //     </li>
    //     <li
    //       className={`${active == 2 && "active"}`}
    //       onClick={() => {
    //         setActive(2);
    //       }}
    //     >
    //       <div id="marker">
    //         <span></span>
    //       </div>
    //       <a href="#">
    //         <span className="icon-menu">
    //           <HiOutlineHome size={40} />
    //         </span>
    //         <text>Profile</text>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Menu;
