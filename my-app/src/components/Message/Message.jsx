import React from "react";
import styles from "./Message.module.scss";
import {Header} from "./Header";
import {Main} from "./Main";
import arrowIcon from "@icons/arrowIcon.svg";
import starIcon from "@icons/starIcon.svg";
import hideIcon from "@icons/hideIcon.svg";
import settingsIcon from "@icons/settingsIcon.svg";

const headerButtons = [
  {id: 0, text: "Левый"},
  {id: 1, text: "Центр"},
  {id: 2, text: "Правый"},
]

const headerIcons = [
  {id: 0, url: arrowIcon},
  {id: 1, url: hideIcon},
  {id: 2, url: settingsIcon},
  {id: 3, url: starIcon},
]

export function Message({data}) {
  return (
    <div className={styles.message}>
      <Header buttons={headerButtons} icons={headerIcons} author={data?.author} channel={data?.channel}/>
      <Main date={data?.date} content={data?.content} attachments={data?.attachments}/>
    </div>
  );
}