import React from "react";
import styles from "./Message.module.scss";
import {Header} from "./Header";
import {Main} from "./Main";

export function Message({data}) {
  return (
    <div className={styles.message}>
      <Header author={data?.author} channel={data?.channel}/>
      <Main date={data?.date} content={data?.content} attachments={data?.attachments}/>
    </div>
  );
}