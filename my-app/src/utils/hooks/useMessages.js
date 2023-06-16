import {useEffect, useState} from "react";
import {api} from "@api";
import {isArrayEmpty} from "@helpers";

export function useMessages(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);

  const [isReverseOrder, setIsReverseOrder] = useState(false);

  const [lastMessageId, setLastMessageId] = useState(0);

  function handleToggleOrder() {
    setIsReverseOrder(prevOrder => !prevOrder);
  }

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

  return [messages, isReverseOrder, handleToggleOrder];
}