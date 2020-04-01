import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect (() => {
    axiosWithAuth().get('http://localhost:5000/api/colors').then(data => setColorList(data.data));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} props={props} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
