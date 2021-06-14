import React, { useState, useEffect } from "react";
import "./Sorting.css";
import SortingList from "./SortingList";
import Button from "./Button";

const Sorting = () => {
  const [arr, setArr] = useState([]);
  const [arrswap, setArrswap] = useState([]);
  const [bars, setBars] = useState(100);

  // for completed bar.
  // const [completed, setCompleted] = useState([]);

  useEffect(() => {
    resetArray();
  }, [bars]);

  // generate random value based on min and max.
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //method for initiazling bars.
  const resetArray = () => {
    setArr([]);

    const array = [];
    for (let i = 0; i < bars; i++) {
      array.push(getRndInteger(5, 900));
    }

    setArr(array);
  };

  // setbar.
  const setBarFunc = (num) => {
    setBars(num);
  }

  //bubble sort.
  const bubbleSort = () => {
    let l = arr.length;
    let temp = [...arr];
    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        setTimeout(() => {
          const currentBars = [];
          currentBars.push(j);
          currentBars.push(j + 1);
          console.log(currentBars);
          if (temp[j] > temp[j + 1]) {
            let t = temp[j + 1];
            temp[j + 1] = temp[j];
            temp[j] = t;
          }
          setArrswap([...currentBars]);

          setArr([...temp]);
        }, i * 10);
        console.log(arrswap);
      }

      // for sorted bar.
      // setTimeout(() => {
      //   let com = [];
      //   for (let k = l; k >= l - i - 1; k--) {
      //     com.push(k);
      //   }
      //   setCompleted([...com]);
      // }, 1000);
    }

    setTimeout(() => {
      setArrswap([]);
    }, 4000);
  };

  return (
    <div className="array-section">
      <div className="array-content">
        <div className="sort-sidebar">
          <Button resetArray={resetArray} bubbleSort={bubbleSort} arr={arr} setBarFunc={setBarFunc} />
        </div>
        <div className="sort-content">
          <SortingList arr={arr} arrswap={arrswap} />
        </div>
      </div>
    </div>
  );
};

export default Sorting;
