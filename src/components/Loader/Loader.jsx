import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import clsx from "clsx";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass={clsx(css.loader)}
    />
  );
};

export default Loader;
