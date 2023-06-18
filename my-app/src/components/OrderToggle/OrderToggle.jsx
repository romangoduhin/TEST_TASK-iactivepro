import React from "react";
import {Button} from "@templates";
import styles from "./OrderToggle.module.scss";

export function OrderToggle({isReverseOrder, onToggle}) {
  return (
    <div className={styles.toggle}>
      <Button className={isReverseOrder ? `${styles.button} ${styles.active}` : styles.button}
              onClick={onToggle}>
        New -> Old
      </Button>

      <Button className={isReverseOrder ? styles.button : `${styles.button} ${styles.active}`}
              onClick={onToggle}>
        Old -> New
      </Button>
    </div>
  );
}