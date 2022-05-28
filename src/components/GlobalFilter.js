import React from "react";
import { useState } from "react";
import { useAsyncDebounce } from "react-table/dist/react-table.development";
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
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
        type="text"
        value={filter || ""}
        onChange={(e) => {
          setFilter(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
