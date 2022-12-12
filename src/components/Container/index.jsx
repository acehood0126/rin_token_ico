import classNames from "classnames";
import React from "react";

export default function Container(props) {
  const cn = classNames({
    "max-w-7xl px-4 w-full xl:px-9 lg:mx-auto": true,
    [props.className]: true,
  });
  return <div {...props} className={cn} />;
}
