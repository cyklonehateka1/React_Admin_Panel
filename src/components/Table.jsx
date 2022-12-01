import React from "react";
import "../styles/table.css";
import { tableRows } from "../utils/data";
import { tableColumns } from "../utils/data";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  return (
    <div className="table">
      <div className="tableCont">
        <h5>Current Orders</h5>
        <DataGrid
          rows={tableRows}
          columns={tableColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Table;
