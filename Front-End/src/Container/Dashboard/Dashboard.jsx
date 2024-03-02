import React from "react";
import { useIntl } from "react-intl";

const Dashboard = () => {
  const { formatMessage } = useIntl();

  return <div>{formatMessage({ id: "dashboard" })} </div>;
};

export default Dashboard;
