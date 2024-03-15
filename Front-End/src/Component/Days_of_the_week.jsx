import React from "react";
import { consoleLog } from "../helper/utils";
import { useIntl } from "react-intl";

const Days_of_the_week = ({ Days }) => {
  const { formatMessage } = useIntl();

  consoleLog("Days", Days);

  return (
    <div className="flex flex-row flex-wrap justify-center justify-items-center mx-20 glass-background p-5 text-lg font-semibold">
      {Days.map((item, index) => {
        return (
          <>
            <label className="flex  flex-col justify-center justify-items-center min-w-30 cursor-pointer ">
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              <div class="flex px-10 py-5 flex-col justify-center justify-items-center rounded-lg text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                <span className="text-center">
                  {formatMessage({ id: item.title })}
                </span>
                <span className="text-center">{item.date}</span>
              </div>
            </label>
          </>
        );
      })}
    </div>
  );
};

export default Days_of_the_week;
