import { useContext, useEffect, useMemo, useRef } from "react";
import ChatMessage from "./chatMessage";
import { ChatContext } from "./chat";
import Message from "@/models/message";

export function ChatList() {
  const listRef = useRef<HTMLDivElement>(null);
  const chatContextValue = useContext(ChatContext);
  const { messages } = chatContextValue;

  const Messages = useMemo(() => {
    return messages.map((message, i) => <ChatMessage key={i} message={message} />);
  }, [messages]);

  useEffect(() => {
    if (listRef.current !== null) {
      listRef.current.scroll({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="chatList" ref={listRef}>
        {Messages}
      </div>
    </>
  );
}
