import Message from "@/models/message";

export default async function sendMessage(text: string): Promise<Message> {
  const url = `api/query/${encodeURIComponent(text)}`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      console.log(response);
      const data = await response.json();
      return data.message;
    } else {
      return { sender: "Error", text: "Chat is not currently availbble. Please try again later.", selections: [] };
    }
  } catch (ex) {
    console.error(ex);
    return { sender: "Error", text: "An error occurred. Please try again later.", selections: [] };
  }
}
