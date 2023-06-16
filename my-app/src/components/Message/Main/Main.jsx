import React from "react";
import styles from "./Main.module.scss";
import {formatDate} from "@helpers";

export function Main({date, content, attachments}) {
  const formattedDate = formatDate(date)

  function renderMedia(type, url, key) {
    if (type === "video") {
      return <video key={key} src={url} controls/>
    } else if (type === "image") {
      return <img key={key} src={url} alt="Image"/>;
    } else {
      return null;
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <p className={styles.time}>{formattedDate}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
        <p className={styles.nextText}>Далее</p>
        <div className={styles.attachments}>
          {attachments.map((attachment, index) => {
            const {type, url} = attachment;

            return renderMedia(type, url, index)
          })}
        </div>
      </div>
    </div>
  );
}