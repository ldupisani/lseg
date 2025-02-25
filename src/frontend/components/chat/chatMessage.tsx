import { useContext } from "react";
import { ChatContext } from "./chat";
import Message from "../../../models/message";
import Selection from "../../../models/selection";
import sendMessage from "./sendMessage";

export default function ChatMessage({ message }: { message: Message }) {
  const { messages, setMessages } = useContext(ChatContext);

  async function handleSelection(selection: Selection) {
    const userMessage = { sender: "User", text: selection.name, selections: [] };
    const message = await sendMessage(selection.value || selection.name);
    setMessages([...messages, userMessage, message]);
  }

  return (
    <div className={message.sender}>
      <div className="chatText">{message.text}</div>
      <div className="chatSelections">
        {message.selections.map((selection, i) => (
          <div className="chatSelection" key={i} onClick={() => handleSelection(selection)}>
            {selection.name}
          </div>
        ))}
      </div>
    </div>
  );
}
