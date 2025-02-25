import stockData from "./stockData.json";
import Message from "../models/message";
import Exchange from "../models/exchange";
import Stock from "../models/stock";
import Selection from "@/models/selection";

class Bot {
  findSelectable(text: string): Message | undefined {
    // First do a pass through all exchanges to avoid searching deeply when unecessary
    for (let exchange of stockData) {
      if (exchange.code.toLowerCase() === text.toLowerCase() || exchange.stockExchange.toLowerCase() === text.toLowerCase()) {
        return {
          sender: "Bot",
          text: "Please select a stock.",
          selections: exchange.topStocks.map<Selection>((stock: Stock) => {
            return { name: stock.stockName };
          }),
        };
      }
    }

    // If no exchange was found perform a deep search of stocks
    for (let exchange of stockData) {
      for (let stock of exchange.topStocks) {
        if (stock.code.toLowerCase() === text.toLowerCase() || stock.stockName.toLowerCase() === text.toLowerCase()) {
          return {
            sender: "Bot",
            text: `Stock price of ${stock.stockName} is  ${stock.price.toFixed(2)}`,
            selections: [{ name: "Main menu" }, { name: "Go back", value: exchange.stockExchange }],
          };
        }
      }
    }
  }

  // This can be extended later to handle additional query types
  processQuery(text: string): Message {
    return (
      this.findSelectable(text) || {
        sender: "Bot",
        text: "Please select a stock exchange.",
        selections: stockData.map<Selection>((exchange: Exchange) => {
          return { name: exchange.stockExchange };
        }),
      }
    );
  }
}

export default new Bot();
