import React from "react";
import {List} from "@templates";
import {Message} from "@components";
import styles from "./MessageList.module.scss";

export function MessageList({favorites, toggleFavorite, messages, fetchOldMessages}) {
  function renderItem(item) {
    let isFavorite = favorites.includes(item.id);
    let isOldest = !!item.isOldest;

    return <Message isOldest={isOldest}
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                    data={item}
                    fetchOldMessages={fetchOldMessages}/>
  }

  return (
    <div className={styles.messageList}>
      <List items={messages} renderItem={renderItem}/>
    </div>
  );
}