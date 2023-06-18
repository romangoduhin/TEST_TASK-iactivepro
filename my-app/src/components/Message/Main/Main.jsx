import React from "react";
import styles from "./Main.module.scss";
import {formatDate, isArrayEmpty} from "@helpers";

const VIDEO_TYPE = "video";
const IMAGE_TYPE = "image";

export function Main({date, content, attachments}) {
  const formattedDate = formatDate(date)

  function renderMedia(type, url, key) {
    if (type === VIDEO_TYPE) {
      return <video key={key} src={url} controls/>
    } else if (type === IMAGE_TYPE) {
      return <img key={key} src={url} alt="image"/>;
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

        {!isArrayEmpty(attachments) && <p className={styles.nextText}>Далее</p>}

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