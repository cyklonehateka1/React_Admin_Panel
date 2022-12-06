import React from "react";
import Table from "../components/Table";
import "../styles/products.css";
import { orderProductsCol, orderProductRow } from "../utils/data";

const Products = () => {
  return (
    <div className="products">
      <div className="productsCont">
        <Table
          rows={orderProductRow}
          columns={orderProductsCol}
          pagination={10}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default Products;
