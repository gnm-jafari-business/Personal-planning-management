import React from "react";
import { Input, Label } from "reactstrap";
import CardLoading from "./loadnig/CardLoading";

const ShowTask = () => {
  const loading = false;
  return (
    <>
      <div className=" min-w-64 h-80 flex text-black flex-col flex-wrap justify-start items-start glass-background p-5">
        {loading ? (
          <CardLoading />
        ) : (
          <>
            <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900 mb-5">
              Tasks
            </h1>
            <div className="flex flex-col justify-start justify-items-start w-full">
              <div className="flex flex-row justify-start justify-items-center w-full mb-2">
                <Input type="checkbox" className="mr-2" />
                <Label check>Check me out</Label>
              </div>
              <div className="flex flex-row justify-start justify-items-center w-full mb-2">
                <Input type="checkbox" className="mr-2" />
                <Label check>Check me out</Label>
              </div>
              <div className="flex flex-row justify-start justify-items-center w-full mb-2">
                <Input type="checkbox" className="mr-2" />
                <Label check>Check me out</Label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShowTask;
