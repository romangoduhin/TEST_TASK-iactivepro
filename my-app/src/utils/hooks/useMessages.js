import {useEffect, useState} from "react";
import {api} from "@api";
import {isArrayEmpty} from "@helpers";

export function useMessages(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);

  const [isReverseOrder, setIsReverseOrder] = useState(false);

  const [lastMessageId, setLastMessageId] = useState(0);

  const sortedMessages = isReverseOrder ? [...messages].reverse() : messages;

  function handleToggleOrder() {
    setIsReverseOrder(prevOrder => !prevOrder);
  }

  async function fetchMessages() {
    const newMessages = await api.getMessages(lastMessageId);

    if (newMessages) {
      const lastMessage = newMessages.at(-1);

      setLastMessageId(lastMessage.id);

      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
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

  return [sortedMessages, isReverseOrder, handleToggleOrder];
}