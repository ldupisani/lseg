import Selection from "./selection";

export default interface Message {
  sender: string;
  text: string;
  selections: Selection[];
}
