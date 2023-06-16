import React from "react";
import styles from "./Icon.module.scss";

export function Icon({url, size, className, onClick, ...attrs}) {
  const style = {
    width: size,
    height: size
  };

  return (
    <img src={url}
         className={className ? `${className} ${styles.icon}` : styles.icon}
         onClick={onClick}
         style={style}
         {...attrs}
         alt={"icon"}
    />
  );
}