export const getCoinCarousel = async () => {
  const response = await fetch(
    "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=DAI,BTC,ETH,USDT,BNB,LUNA,AVAX,SHIB,MATIC,CRO&key=ckey_2870fbe91ac146269ee93e49226"
  );
  const result = await response.json();
  const { data } = result;

  return data;
};
