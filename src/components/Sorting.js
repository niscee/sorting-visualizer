import React, { useState, useEffect } from "react";
import "./Sorting.css";
import SortingList from "./SortingList";
import Button from "./Button";


const Sorting = () => {
  const [arr, setArr] = useState([]);
  const [arrswap, setArrswap] = useState([]);
  const [completed, setCompleted] = useState([]);

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
    for (let i = 0; i < 100; i++) {
      array.push(getRndInteger(5, 900));
    }

    setArr(array);
    setArrswap([]);
    setCompleted([]);
  };

  //bubble sort.
  const bubbleSort = () => {
    let l = arr.length;
    let temp = [...arr];
    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        setTimeout(() => {
          const b = [];
          b.push(j);
          b.push(j + 1);
          if (temp[j] > temp[j + 1]) {
            let t = temp[j + 1];
            temp[j + 1] = temp[j];
            temp[j] = t;
          }
          setArrswap([...b]);

          setArr([...temp]);
        }, 20);
      }
      setTimeout(() => {
        let com = [];
        for (let k = l; k >= l - i - 1; k--) {
          com.push(k);
        }
        setCompleted([...com]);
      }, 20);
    }
    setTimeout(() => {
      setCompleted([]);
      setArrswap([]);
    }, 300);
  };

  return (
    <div className="array-section">
      <div className="array-content">
        <SortingList arr={arr} arrswap={arrswap} completed={completed} />
        <Button resetArray={resetArray} bubbleSort={bubbleSort} arr={arr} />
      </div>
    </div>
  );
};

export default Sorting;
