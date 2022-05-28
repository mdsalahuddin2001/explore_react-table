import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span style={{ display: "inline-block", marginTop: "100px" }}>
      Search:
      <input
        style={{
          marginLeft: "20px",
          padding: "8px",
          border: "2px solid mediumseagreen",
          borderRadius: "4px",
        }}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;
