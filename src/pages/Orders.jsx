import React from "react";
import Order from "../components/Order";
import Table from "../components/Table";
import "../styles/orders.css";
import { ordersPageColumns, ordersPageRows } from "../utils/data";
import TopBar from "../components/TopBar";

const Orders = () => {
  return (
    <div className="orders">
      <TopBar />
      <br />
      <Order />
      <div className="ordersCont">
        <h4>Orders</h4>
        <Table
          rows={ordersPageRows}
          columns={ordersPageColumns}
          pagination={10}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default Orders;
