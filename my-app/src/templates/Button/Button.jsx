import React from "react";
import styles from "./Button.module.scss";

export function Button({onClick, children, className, disabled, ...attrs}) {
  return (
    <button {...attrs}
            onClick={onClick}
            className={className ? `${styles.button} ${className}` : styles.button}
            disabled={disabled}
    >
      {children}
    </button>
  );
}