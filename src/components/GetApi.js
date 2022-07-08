import React from "react";
import { useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

export default function GetApi({
  setSearcedUniList,
  uniList,
  uniSearch,
  searcedUniList,
  click,
  setUniList,
  collageList,
  setCollageList,
  cityList,
  setCityList,
  departmentList,
  setDepartmentList,
}) {
  const apiURL = "http://localhost:3001/data";
  useEffect(() => {
    axios(apiURL)
      .then((response) => response.data)
      .then((json) => setUniList(json));

    console.log("data get from api");
  }, []);

  uniList.map((uni) => {
    collageList.push(uni.name);
    collageList = Array.from(new Set(collageList));
    //departmentList = Array.from(new Set(departmentList))
  });
  //console.log(collageList);
  //console.log(departmentList);

  //filtering departments by name
  useEffect(() => {
    setSearcedUniList(
      uniList.filter(
        (uni) =>
          uni.department
            .toLocaleUpperCase("tr-TR")
            .includes(uniSearch.toLocaleUpperCase("tr-TR")) ||
          uni.name
            .toLocaleUpperCase("tr-TR")
            .includes(uniSearch.toLocaleUpperCase("tr-TR"))
      )
    );
    console.log("search Complated");
  }, [click]);

  //Sorting with Point
  searcedUniList.sort(function (a, b) {
    var keyA = String(a.min_point),
      keyB = String(b.min_point);
    // Compare the 2 dates
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  return <div></div>;
}
