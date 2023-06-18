import React from "react";
import styles from "./Message.module.scss";
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "@components/Message/Footer/index.js";

export function Message({isFavorite, toggleFavorite, data}) {
  function handleToggleFavorite() {
    toggleFavorite(data.id)
  }

  return (
    <div className={styles.message}>
      <Header isFavorite={isFavorite}
              handleToggleFavorite={handleToggleFavorite}
              author={data?.author}
              channel={data?.channel}/>
      <Main date={data?.date} content={data?.content} attachments={data?.attachments}/>
      <Footer/>
    </div>
  );
}