import {useEffect, useState} from "react";
import styles from "./App.module.scss";
import {api} from "@api";
import {MessageList} from "@components";
import {Loader} from "@templates";

function App() {
  const [messages, setMessages] = useState([]);
  const [lastMessageId, setLastMessageId] = useState(0);

  async function fetchMessages() {
    const messages = await api.getMessages(lastMessageId);

    if (messages) {
      const lastMessage = messages.at(-1);

      setLastMessageId(lastMessage.id);
      setMessages((prevMessages) => [...prevMessages, ...messages]);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(fetchMessages, 5000);

    return () => clearInterval(intervalId);
  }, [lastMessageId]);

  if (!messages.length) return <Loader/>

  return (
    <div className={styles.app}>
      <MessageList messages={messages}/>
    </div>
  )
}

export default App
