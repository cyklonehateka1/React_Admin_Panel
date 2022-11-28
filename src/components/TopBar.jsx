import React from "react";
import { CiSearch } from "react-icons/ci";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="left">
        <div className="searchCont">
          <input type="text" />
          <CiSearch />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default TopBar;
