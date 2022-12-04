import React from "react";
import Table from "../components/Table";
import "../styles/products.css";
import { ordersPageColumns, ordersPageRows } from "../utils/data";

const Products = () => {
  return (
    <div className="products">
      <div className="productCont">
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

export default Products;
