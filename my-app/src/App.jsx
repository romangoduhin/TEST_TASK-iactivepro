import React from "react";
import styles from "./App.module.scss";
import {MessageList, OrderToggle} from "@components";
import {Loader} from "@templates";
import {isArrayEmpty} from "@helpers";
import {useFavorites, useMessages} from "@hooks";

function App() {
  const [favorites, toggleFavorite] = useFavorites([]);
  const [messages, isReverseOrder, handleToggleOrder] = useMessages([]);
  
  if (isArrayEmpty(messages)) return <Loader/>

  return (
    <div className={styles.app}>
      <OrderToggle isReverseOrder={isReverseOrder} onToggle={handleToggleOrder}/>
      <MessageList favorites={favorites} toggleFavorite={toggleFavorite} messages={messages}/>
    </div>
  )
}

export default App
