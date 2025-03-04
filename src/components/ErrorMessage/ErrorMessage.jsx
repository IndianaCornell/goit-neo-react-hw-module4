import React from "react";
import clsx from "clsx";

import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={clsx(css.errorMessageDesc)}>
      {" "}
      Oops... something went wrong. Please reload the page.
    </p>
  );
};

export default ErrorMessage;
