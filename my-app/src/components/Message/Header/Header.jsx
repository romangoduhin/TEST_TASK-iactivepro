import React from "react";
import styles from "./Header.module.scss";
import defaultAvatar from "@images/defaultAvatar.png";
import {Button, Icon} from "@templates";

export function Header({buttons, icons, avatarUrl = defaultAvatar, author, channel}) {
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