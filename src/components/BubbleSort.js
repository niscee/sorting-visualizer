import React from "react";

export const BubbleSort = ({ arr }) => {
  let arrLen = arr.length;
  let newArr = arr;
  for (let i = 0; i < arrLen; i++) {
    // Last i elements are already in place
    for (let j = 0; j < arrLen - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (newArr[j] > newArr[j + 1]) {
        // If the condition is true then swap them
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
};
