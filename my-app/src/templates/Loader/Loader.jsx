import React from "react";
import styles from "./Loader.module.scss";

export function Loader({size = "50px"}) {
  const style = {
    width: size,
    height: size
  }

  return (
    <div className={styles.loaderContainer}>
      <div style={style} className={styles.loader}/>
    </div>
  );
}