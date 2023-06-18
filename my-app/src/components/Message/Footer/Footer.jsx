import React from "react";
import styles from "./Footer.module.scss";

const DEFAULT_TAGS = [
  {id: 0, title: "новое"},
  {id: 1, title: "эксперт"},
]

export function Footer({tags = DEFAULT_TAGS}) {
  return (
    <div className={styles.footer}>
      <div className={styles.tags}>
        {tags.map((tag) => <span className={styles.tag} key={tag.id}>#{tag.title}</span>)}
      </div>
    </div>
  );
}