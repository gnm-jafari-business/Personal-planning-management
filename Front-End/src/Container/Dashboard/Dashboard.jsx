import React from "react";
import Days_of_the_week from "../../Component/Days_of_the_week";
import ShowTask from "../../Component/ShowTask";
import { AiOutlineMenu } from "react-icons/ai";
import Analysis from "../../Component/Analysis";
import { Avatar, Switch } from "@material-tailwind/react";
import Menu from "../../Component/Menu";
import Routine from "../../Component/Routine";
import { NotificationsMenu, ProfileMenu } from "../../helper/utils";

const Dashboard = () => {
  const Days = [
    { title: "saturday", id: "1", date: "1402/11/12" },
    { title: "sunday", id: "2", date: "1402/11/13" },
    { title: "monday", id: "3", date: "1402/11/14" },
    { title: "tuesday", id: "4", date: "1402/11/15" },
    { title: "wednesday", id: "5", date: "1402/11/16" },
    { title: "thursday", id: "6", date: "1402/11/17" },
    { title: "friday", id: "7", date: "1402/11/18" },
  ];

  return (
    <div
      style={{ backgroundImage: "url(../../../public/bg.jpg)" }}
      className="glass-bg-dashboard h-screen w-screen bg-center bg-no-repeat bg-cover p-10 relative"
    >
      <div className="glass-bg-dashboard h-full w-full p-5">
        <div className=" h-full w-full flex flex-col justify-between items-center">
          <div className="mt-32">
            <Days_of_the_week Days={Days} />
          </div>
          <div className="w-full flex flex-row justify-between gap-4 items-end">
            <Analysis />
            <div className=" flex flex-col gap-5 w-full">
              <div className="glass-background w-24 p-5 flex flex-col justify-center items-center gap-5">
                <ProfileMenu />
                <NotificationsMenu />
                <Switch
                  id="custom-switch-component"
                  ripple={true}
                  className="h-full w-full checked:bg-[#2ec946]"
                  containerProps={{
                    className: "w-11 h-6 bg-stone-700",
                  }}
                  circleProps={{
                    className: "before:hidden left-0.5 border-none",
                  }}
                />
                <Switch
                  id="custom-switch-component"
                  ripple={true}
                  className="h-full w-full checked:bg-[#2ec946]"
                  containerProps={{
                    className: "w-11 h-6 bg-stone-700",
                  }}
                  circleProps={{
                    className: "before:hidden left-0.5 border-none",
                  }}
                />
              </div>
            </div>
            <Routine />
            <ShowTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
