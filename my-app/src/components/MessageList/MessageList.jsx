import React from "react";
import {List} from "@templates";
import {Message} from "@components";
import styles from "./MessageList.module.scss";

export function MessageList({messages}) {
  function renderItem(item) {
    return <Message data={item}/>
  }

  return (
    <div className={styles.messageList}>
      <List items={messages} renderItem={renderItem}/>
    </div>
  );
}