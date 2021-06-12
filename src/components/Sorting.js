import React, { useState, useEffect } from "react";
import "./Sorting.css";
import SortingList from "./SortingList";
import Button from "./Button";
import { BubbleSort } from "./BubbleSort";

const Sorting = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);


  // generate random value based on min and max.
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  
  //method for initiazling bars.
  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(getRndInteger(5, 900));
    }

    setArr(array);
  };

  
  //check if arrays are equal or not.
  const arraysAreEqual = (a1, a2) => {
    if (a1.length !== a2.length) return false;
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  };

  
  //bubble sort.
  const bubbleSort = () => {
    const bubble = BubbleSort({ arr });
    const check = arr;
    check.sort((a, b) => {
      return a - b;
    });
    const result = arraysAreEqual(bubble, check);
    console.log(result);
  };

  return (
    <div className="array-section">
      <div className="array-content">
        <SortingList arr={arr} />
        <Button resetArray={resetArray} bubbleSort={bubbleSort} arr={arr} />
      </div>
    </div>
  );
};

export default Sorting;
