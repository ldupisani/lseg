import { useState, createContext, Dispatch, SetStateAction, use, useEffect } from "react";
import ChatInput from "./chatInput";
import { ChatList } from "./chatList";
import Message from "@/models/message";
import sendMessage from "./sendMessage";

interface ChatContextType {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export const ChatContext = createContext<ChatContextType>({ messages: [], setMessages: () => {} });

export default function Chat() {
  const [messages, setMessages] = useState([{ sender: "Bot", text: "Hello Welcome to LSEG. I'm here to help you.", selections: [] } as Message]);
  const chatContextValue = { messages, setMessages };

  useEffect(() => {
    sendMessage("start").then((message) => setMessages([...messages, message]));
  }, []);

  return (
    <ChatContext.Provider value={chatContextValue}>
      <div className="chat">
        <div className="chatHeader">LSEG chatbot</div>
        <ChatList />
        <ChatInput />
      </div>
    </ChatContext.Provider>
  );
}
