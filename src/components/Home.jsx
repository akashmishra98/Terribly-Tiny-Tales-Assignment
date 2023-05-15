import React, { useState } from "react";
import "./Home.css";
import { Graph } from "./Graph";

import {CSVLink} from "react-csv"
export default function Home() {
  const [data, setData] = useState();
  function CallApi() {
    fetch("https://www.terriblytinytales.com/test.txt")
      .then(function (responce) {
        return responce.text("");
      })
      .then(function (responce) {
        // console.log(responce)
        setData(responce);
        // console.log(data);
      });
  }
  const formateData = data?.split("\n");
  const hasharray = {};
  if (formateData) {
    formateData.forEach((element) => {
      const spaceSperated = element.split(" ");
      spaceSperated.forEach((iteam) => {
        const iteamLowerCase = iteam.toLowerCase();
        if (
          iteamLowerCase[iteam.length - 1] === "." ||
          iteamLowerCase[iteam.length - 1] === "?" ||
          iteamLowerCase[iteam.length - 1] === "," ||
          iteamLowerCase[iteam.length - 1] === " "
        ) {
          const val = iteamLowerCase.length - 1;
          const str = iteamLowerCase.slice(0, val);
          if (hasharray[str]) {
            hasharray[str]++;
          } else {
            hasharray[str] = 1;
          }
        } else {
          if (hasharray[iteamLowerCase]) {
            hasharray[iteamLowerCase]++;
          } else {
            hasharray[iteamLowerCase] = 1;
          }
        }
      });
    });
  }
  // console.log(hasharray);
  let array = [];
  for (var val in hasharray) {
    array.push([val, hasharray[val]]);
  }

  array.sort(function (a, b) {
    return a[1] - b[1];
  });
  // again converted to array of objects so that able to apply it x-axis finally !
  let objSorted = [];
  array.forEach(function (item) {
    const obj = {
      word: item[0],
      value: item[1],
    };
    // objSorted[item[0]]=item[1]
    objSorted.push(obj);
  });
  // console.log(objSorted);
  let final = [];
  for (let i = objSorted.length - 2; i > objSorted.length - 22; i--) {
        final.push(objSorted[i]);
  }
  const headers = [
    {label : "Words",key: "word"},
    {label : "Frequency",key: "value"}
]

console.log("Rerender");

  return (
    <>
      <div className="containerParent">
        <div className="heading">
          <h1>Click to see the content</h1>
        </div>
        <div className="contentLink">
          <button className="animate" onClick={CallApi}>
            <h1>Submit</h1>
          </button>


        {final[0] ? <CSVLink data = {final} headers={headers}> 
          <button className="animate" onClick={CallApi}>
            <h1>Export</h1>
          </button>
          </CSVLink>
 : ""}
        
        </div>
        {final[0] ? <Graph final={final} /> : ""}
      </div>
    </>
  );
}