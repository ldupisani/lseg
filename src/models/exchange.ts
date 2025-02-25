import Stock from "./stock";

export default interface Exchange {
  code: string;
  stockExchange: string;
  topStocks: Stock[];
}
