import {useEffect, useMemo, useState} from "react";
import {api} from "@api";
import {isArrayEmpty} from "@helpers";

export function useMessages(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);

  const [isReverseOrder, setIsReverseOrder] = useState(false);

  const [lastMessageId, setLastMessageId] = useState(0);

  const updatedMessages = useMemo(() => (
      messages.map((message, index) => index === 0 ? {...message, isOldest: true} : message)),
    [messages]);

  const sortedMessages = isReverseOrder ? [...updatedMessages].reverse() : updatedMessages

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

  async function fetchOldMessages() {
    const oldMessages = await api.getOldMessages();

    if (oldMessages) {
      setMessages((prevMessages) => [...oldMessages, ...prevMessages]);
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

  return [sortedMessages, isReverseOrder, handleToggleOrder, fetchOldMessages];
}