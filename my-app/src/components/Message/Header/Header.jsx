import React from "react";
import styles from "./Header.module.scss";
import {Button, Icon} from "@templates";
import defaultAvatar from "@images/defaultAvatar.png";
import arrowIcon from "@icons/arrowIcon.svg";
import hideIcon from "@icons/hideIcon.svg";
import settingsIcon from "@icons/settingsIcon.svg";
import starIcon from "@icons/starIcon.svg";
import favoriteIcon from "@icons/favoriteIcon.svg";


export function Header({isFavorite, handleToggleFavorite, avatarUrl = defaultAvatar, author, channel}) {
  const buttons = [
    {id: 0, text: "Левый"},
    {id: 1, text: "Центр"},
    {id: 2, text: "Правый"},
  ]

  const icons = [
    {id: 0, url: arrowIcon},
    {id: 1, url: hideIcon},
    {id: 2, url: settingsIcon},
    {id: 3, url: isFavorite ? favoriteIcon : starIcon, onClick: handleToggleFavorite},
  ]
  
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <img className={styles.avatar} src={avatarUrl} alt="avatar"/>
        <div className={styles.source}>
          <p className={styles.author}>{author}</p>
          <p className={styles.channel}>{channel}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          {buttons.map(button => (
            <Button key={button.id} onClick={button.onClick}>
              {button.text}
            </Button>
          ))}
        </div>

        <div className={styles.icons}>
          {icons.map(icon => (
            <Icon key={icon.id} url={icon.url} onClick={icon.onClick}/>
          ))}
        </div>
      </div>
    </div>
  );
}