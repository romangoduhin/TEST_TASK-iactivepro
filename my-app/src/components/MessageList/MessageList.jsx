import React from "react";
import {List} from "@templates";
import {Message} from "@components";
import styles from "./MessageList.module.scss";

export function MessageList({messages}) {
  function renderItem(item) {
    return <Message data={item}/>
  }

  return (
    <List className={styles.messageList} items={messages} renderItem={renderItem}/>
  );
}