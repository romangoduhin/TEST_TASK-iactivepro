import React from "react";
import {List} from "@templates";
import {Message} from "@components";
import styles from "./MessageList.module.scss";

export function MessageList({favorites, toggleFavorite, messages}) {
  function renderItem(item) {
    let isFavorite = false;

    if (favorites.includes(item.id)) {
      isFavorite = true;
    }

    return <Message isFavorite={isFavorite} toggleFavorite={toggleFavorite} data={item}/>
  }

  return (
    <div className={styles.messageList}>
      <List items={messages} renderItem={renderItem}/>
    </div>
  );
}