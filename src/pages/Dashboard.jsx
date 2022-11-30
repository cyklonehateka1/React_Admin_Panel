import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.css";
import StatsWidget from "../components/StatsWidget";
import Charts from "../components/Charts";
import Reviews from "../components/Reviews";
import Table from "../components/Table";
import TopProduct from "../components/TopProduct";
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
        <div className="chartsReviewsCont">
          <Charts />
          <Reviews />
        </div>
        <div className="tableTopProCont">
          <Table />
          <TopProduct />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
