import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import "../css/currency.css";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_E4S3HC1M8hP1vejAUY6BqqpJXRzBV10JbxefCbjP";
const baseCurrency = "&base_currency=";

function Currency() {
  //Statler tanımlanır ve bağlantılar sağlanır
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("TL");
  const [resault, setResault] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}${baseCurrency}${fromCurrency}`
    );
    const response2 = response.data.data[toCurrency] * amount;
    setResault(response2.toFixed(2));

    // //USD karşılığındaki para değerleri
    // const resault = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);

    // //Türkiye karşılığıdaki para değerleri
    // const resaultTRY = await axios.get(
    //   `${BASE_URL}?apikey=${API_KEY}${baseCurrency}TRY`
    // );
    // //console.log(setResault(resaultTRY.data.data.EUR * amount));

    // //EURO karşılığındaki para değerleri
    // const resaultEURO = await axios.get(
    //   `${BASE_URL}?apikey=${API_KEY}${baseCurrency}EUR`
    // );

    // //USD için şartlı yap
    // if (fromCurrency === "USD" && toCurrency === "TL") {
    //   const sonuc = resault.data.data.TRY * amount;
    //   setResault(sonuc.toFixed(2));
    // } else if (fromCurrency === "USD" && toCurrency === "EURO") {
    //   const sonuc = resault.data.data.EUR * amount;
    //   setResault(sonuc.toFixed(2));
    // } else if (fromCurrency === "USD" && toCurrency === "USD") {
    //   const sonuc = resault.data.data.USD * amount;
    //   setResault(sonuc.toFixed(2));
    // }

    // //TRY için şartlı yapı
    // else if (fromCurrency === "TL" && toCurrency === "USD") {
    //   setResault(resaultTRY.data.data.USD * amount);
    // } else if (fromCurrency === "TL" && toCurrency === "EURO") {
    //   const sonuc = resaultTRY.data.data.EUR * amount;
    //   setResault(sonuc.toFixed(2));
    // } else if (fromCurrency === "TL" && toCurrency === "TL") {
    //   const sonuc = resaultTRY.data.data.TRY * amount;
    //   setResault(sonuc.toFixed(2));
    // }

    // //EURO için şartlı yapı
    // else if (fromCurrency === "EURO" && toCurrency === "USD") {
    //   setResault(resaultEURO.data.data.USD * amount);
    // } else if (fromCurrency === "EURO" && toCurrency === "TL") {
    //   const sonuc = resaultEURO.data.data.TRY * amount;
    //   setResault(sonuc.toFixed(2));
    // } else if (fromCurrency === "EURO" && toCurrency === "EURO") {
    //   const sonuc = resaultEURO.data.data.EUR * amount;
    //   setResault(sonuc.toFixed(2));
    // }
  };
  return (
    <div className="currency-div">
      <div className="title">
        <h3>DÖVİZ KUR UYGULAMASI</h3>
      </div>

      <div className="main-div">
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <select
          className="select1"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowCircleRight />
        <select
          className="select2"
          onChange={(e) => settoCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input
          className="input"
          type="number"
          value={resault}
          onChange={(e) => setResault(e.target.value)}
        ></input>
      </div>
      <div className="button">
        <button onClick={exchange}>Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
