import classNames from "classnames";
import React from "react";

export default function Heading({ children, className = "" }) {
  const cn = classNames({
    " font-bold  text-white text-4xl xl:text-5xl text-center": true,
    [className]: true,
  });
  return <h1 className={cn}>{children}</h1>;
}

export function Gradient({ children, className }) {
  const cn = classNames({
    "text-transparent text-clip bg-gradient-to-r from-app-primary to-app-secondary fill-transparent bg-clip-text": true,
    [className]: true,
  });
  return <span className={cn}>{children}</span>;
}
