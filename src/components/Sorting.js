import React, { useState, useEffect } from "react";
import "./Sorting.css";
import SortingList from "./SortingList";
import Button from "./Button";

const Sorting = () => {
  const [arr, setArr] = useState([]);
  const [arrswap, setArrswap] = useState([]);
  const [bars, setBars] = useState(25);

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
  };

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

          if (temp[j] > temp[j + 1]) {
            let t = temp[j + 1];
            temp[j + 1] = temp[j];
            temp[j] = t;
          }
          setArrswap([...currentBars]);
          setArr([...temp]);
        }, i * 100);
      }
    }

    setTimeout(() => {
      setArrswap([]);
    }, 3000);
  };

  //insertion sort.
  const insertSortFunc = (j, temp, key, i) => {
    setTimeout(() => {
      const currentBars = [];
      currentBars.push(j);
      currentBars.push(j + 1);
      if (j >= 0 && temp[j] > key) {
        temp[j + 1] = temp[j];
        j -= 1;
        insertSortFunc(j, temp, key, i);
      } else {
        temp[j + 1] = key;
        setArr([...temp]);
      }
      setArrswap([...currentBars]);
      setArr([...temp]);
    }, i * 50);
    setTimeout(() => {
      setArrswap([]);
    }, 5000);
  };

  const insertSort = () => {
    let l = arr.length;
    let temp = [...arr];
    let i, key, j;
    for (i = 1; i < l; i++) {
      key = temp[i];
      j = i - 1;
      insertSortFunc(j, temp, key, i);
    }
  };

  return (
    <div className="array-section">
      <div className="array-content">
        <div className="sort-sidebar">
          <Button
            resetArray={resetArray}
            bubbleSort={bubbleSort}
            arr={arr}
            setBarFunc={setBarFunc}
            insertSort={insertSort}
          />
        </div>
        <div className="sort-content">
          <SortingList arr={arr} arrswap={arrswap} />
        </div>
      </div>
    </div>
  );
};

export default Sorting;
