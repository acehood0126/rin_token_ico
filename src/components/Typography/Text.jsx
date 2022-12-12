import classNames from "classnames";

export default function Text({ children, className = "" }) {
  const cn = classNames({
    "text-base text-[#FFFFFF]": true,
    [className]: true,
  });
  return <p className={cn}>{children} </p>;
}
