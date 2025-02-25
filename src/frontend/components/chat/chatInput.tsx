import Message from "@/models/message";
import { useContext, useState } from "react";
import { ChatContext } from "./chat";
import sendMessage from "./sendMessage";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { messages, setMessages } = useContext(ChatContext);

  async function handleSendButtonClick() {
    const userMessage = { sender: "User", text, selections: [] };
    const message = await sendMessage(text);
    setMessages([...messages, userMessage, message]);
  }

  return (
    <div className="chatInput">
      <input
        id="chatInput"
        type="text"
        placeholder="Please pick and option or type a message."
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button id="chatInputButton" onClick={handleSendButtonClick}>
        Send
      </button>
    </div>
  );
}
