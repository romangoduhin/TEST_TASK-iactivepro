import React, {useEffect, useState} from "react";
import styles from "./App.module.scss";
import {api} from "@api";
import {MessageList, OrderToggle} from "@components";
import {Loader} from "@templates";
import {isArrayEmpty} from "@helpers";

function App() {
  const [messages, setMessages] = useState([]);
  const [lastMessageId, setLastMessageId] = useState(0);
  const [isReverseOrder, setIsReverseOrder] = useState(false);

  const handleToggleOrder = () => {
    setIsReverseOrder(prevOrder => !prevOrder);
  };

  async function fetchMessages() {
    const messages = await api.getMessages(lastMessageId);

    if (messages) {
      const lastMessage = messages.at(-1);

      setLastMessageId(lastMessage.id);

      if (isReverseOrder) {
        setMessages((prevMessages) => [...messages, ...prevMessages,]);
      } else {
        setMessages((prevMessages) => [...prevMessages, ...messages,]);
      }
    }
  }

  useEffect(() => {
    if (lastMessageId) {
      const intervalId = setInterval(fetchMessages, 5000);

      return () => clearInterval(intervalId);
    }
  }, [lastMessageId]);


  useEffect(() => {
    if (isArrayEmpty(messages)) {
      fetchMessages()
    }
  }, []);

  if (isArrayEmpty(messages)) return <Loader/>

  return (
    <div className={styles.app}>
      <OrderToggle isReverseOrder={isReverseOrder} onToggle={handleToggleOrder}/>
      <MessageList messages={messages}/>
    </div>
  )
}

export default App
