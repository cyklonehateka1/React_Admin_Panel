import React from "react";
import Table from "../components/Table";
import "../styles/orders.css";

const Orders = () => {
  return (
    <div className="orders">
      <div className="ordersCont">
        <Table style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Orders;
