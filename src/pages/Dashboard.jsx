import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.css";
import StatsWidget from "../components/StatsWidget";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardCont">
        <TopBar />
        <div className="statsWidgetCont">
          <StatsWidget />
          <StatsWidget />
          <StatsWidget />
          <StatsWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
