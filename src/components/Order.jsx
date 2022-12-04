import React from "react";
import "../styles/order.css";

const Order = () => {
  return (
    <div className="order">
      <div className="orderCont">
        <h5>Order from Cyklone Hateka</h5>
        <div>
          <div>
            <span>Order Id</span>
            <h5>424867236643</h5>
          </div>
          <div>
            <span>Custmer ID</span>
            <h5>7232445354657</h5>
          </div>
        </div>
        <h4 className="orderInfo">Order Info</h4>
        <div className="orderInfoCont">
          <div>
            <div>
              <span>Estimated Shipping Cost</span>
              <h5>$3984</h5>
            </div>
            <div>
              <span>Address</span>
              <h5>Accra, Airport City</h5>
            </div>
          </div>
          <div>
            <div>
              <span>Estimated Shipping Cost</span>
              <h5>$3984</h5>
            </div>
            <div>
              <span>Address</span>
              <h5>Accra, Airport City</h5>
            </div>
          </div>
          <div>
            <div>
              <span>Payment Method</span>
              <h5>Debit Card (MaterCard)</h5>
            </div>
            <div>
              <span>Account Number</span>
              <h5>1400005266928</h5>
            </div>
          </div>
          <div className="productsInfoCont">
            <h4>Products</h4>
            <div className="products">
              <table>
                <thead>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Size</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Color</th>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;