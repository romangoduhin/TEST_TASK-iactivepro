import React from "react";
import {List} from "@templates";
import {Message} from "@components";

export function MessageList({messages}) {
  function renderItem(item) {
    return <Message data={item}/>
  }

  return (
    <List items={messages} renderItem={renderItem}/>
  );
}