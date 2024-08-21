import React from "react";
import "./index.css";
import LineChart from "../../../../elements/Feedback/Chart";

export const MarketRightSection = () => {
  const marketRates = [
    {
      type: "Pollodium",
      currency: "ZAR",
      rate: 250,
    },
    {
      type: "Hydroden",
      currency: "ZAR",
      rate: 500,
    },
    {
      type: "Lithium",
      currency: "ZAR",
      rate: 750,
    },
    {
      type: "Xenon",
      currency: "ZAR",
      rate: 1000,
    },
  ];
  return (
    <div className="market-right">
      <div className="market-right-rates">
        <div className="market-right-label h1">Rates</div>
        <div className="market-right-rates-wrap">
          <div className="market-right-rates-heading-wrap">
            <div className="market-right-rates-heading">Type</div>
            <div className="market-right-rates-heading">Amount</div>
          </div>
          {marketRates?.map((rate, i) => {
            return (
              <div className="market-right-rates-rate" key={i}>
                <div className="market-right-rates-rate-type">
                  1 {rate.type}
                </div>
                <div className="market-right-rates-amount">
                  {rate.currency + " " + rate.rate}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="market-right-chart">
        <div className="market-right-chart-heading">Past Trends</div>
        <LineChart />
      </div>
    </div>
  );
};
