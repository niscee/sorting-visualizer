import React from "react";

const SortingList = ({ arr }) => {
  return (
    <>
      {arr.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </>
  );
};

export default SortingList;
