import {useEffect, useState} from "react";
import styles from "./App.module.scss";
import {api} from "@api";
import {MessageList} from "@components";

function App() {
  const [messages, setMessages] = useState(null);

  async function fetchMessages() {
    const messages = await api.getMessages();

    setMessages(messages)
  }

  useEffect(() => {
    fetchMessages()
  }, []);

  if(!messages) return <div>Loading</div>

  return (
    <div className={styles.app}>
      <MessageList messages={messages}/>
    </div>
  )
}

export default App
