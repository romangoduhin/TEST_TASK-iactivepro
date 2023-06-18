import React from "react";
import styles from "./App.module.scss";
import {MessageCounter, MessageList, OrderToggle} from "@components";
import {Loader} from "@templates";
import {isArrayEmpty} from "@helpers";
import {useFavorites, useMessages} from "@hooks";

function App() {
  const [favorites, toggleFavorite] = useFavorites([]);
  const [messages, isReverseOrder, handleToggleOrder, fetchOldMessages] = useMessages([]);

  const messagesCount = messages.length;

  if (isArrayEmpty(messages)) return <Loader/>;

  return (
    <div className={styles.app}>
      <MessageCounter count={messagesCount}/>
      <OrderToggle isReverseOrder={isReverseOrder} onToggle={handleToggleOrder}/>
      <MessageList favorites={favorites} toggleFavorite={toggleFavorite} messages={messages}
                   fetchOldMessages={fetchOldMessages}/>
    </div>
  )
}

export default App
