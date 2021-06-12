import React from "react";

const SortingList = ({ arr, arrswap, completed }) => {
  return (
    <>
      {arr.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{
            height: `${value}px`,
            backgroundColor: arrswap.includes(index)
              ? "green"
              : completed.includes(index)
              ? "red"
              : "pink",
          }}
        ></div>
      ))}
    </>
  );
};

export default SortingList;
