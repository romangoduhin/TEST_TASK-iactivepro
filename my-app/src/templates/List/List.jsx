import React from "react";
import styles from "./List.module.scss";

export function List({items, renderItem, className}) {
  return (
    <ul className={className? className : styles.list}>
      {items.map((item,index) => <li key={index}>{renderItem(item)}</li>)}
    </ul>
  );
}