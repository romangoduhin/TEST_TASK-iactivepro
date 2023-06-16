import React from "react";
import styles from "./List.module.scss";

export function List({items, renderItem, className, ...attrs}) {
  return (
    <ul className={className ? `${styles.list} ${className}` : styles.list}
        {...attrs}>
      {items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}
    </ul>
  );
}