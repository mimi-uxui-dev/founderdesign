import React, { useState } from "react";
import smallline from "../assets/small-line.svg";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

function Pricing() {
  const { t } = useTranslation();

  const [pending, setPending] = useState(false);

  const data = [
    {
      id: 1,
      priceId: "price_1NFaUBHpzmuCdPXbgh6pgrCY",
      type: t("Weekly"),
      price: "$699",
      text: t("WeeklyP"),
      benefits: [t("WeeklyLi")],
      linkText: t("Start Now"),
      link: "https://buy.stripe.com/28o4io9108rJ6ic9AD",
    },
    {
      id: 2,
      priceId: "price_1NFaWiHpzmuCdPXbxodKim7O",
      type: t("Monthly"),
      price: "$2,499",
      text: t("WeeklyP"),
      benefits: [t("WeeklyLi")],
      linkText: t("Start Now"),
      link: "https://buy.stripe.com/14k6qwa549vNgWQ6oq",
    },
  ];

  const data2 = [
    {
      id: 3,
      type: t("Monthly+Equity"),
      priceId: "",
      price: "$1,499",
      text: t("Monthly+EquityP"),
      benefits: [t("Monthly+EquityLi")],
      linkText: "https://calendly.com/founderdesign/15min",
      link: t("Book a Call"),
    },
    {
      id: 4,
      type: t("Now"),
      priceId: "",
      price: t("Book a Call"),
      text: t("NowP"),
      benefits: [],
      linkText: "https://calendly.com/founderdesign/15min",
      link: t("Book a Call"),
    },
  ];

  const checkout = async (priceID) => {
    //e.preventDefault();
    setPending(true);

    // console.log(priceID);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        item: {
          price: priceID,
          quantity: 1,
        },
      }),
    });

    // console.log("res", res);

    const body = await res.json();
    setPending(false);
    window.location.href = body.url;
  };

  return (
    <article id="plans" className="container mt200 mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20">{t("Plans")}</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">{parse(t("PlansP"))}</h1>
      </div>
      <div className="pricing-grid mt120">
        {data.map((d) => (
          <from
            method="POST"
            action="/checkout"
            key={d.id}
            className="pricing-card"
          >
            <div>
              <h6>{d.type}</h6>
              <h2>{d.price}</h2>
              <p>{d.text}</p>
              <ul>
                {d.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            {/* <button
              className="button"
              type="submit"
              // onClick={() => checkout(d.priceId)}
            >
              {d.linkText} {pending}
            </button> */}
            <a
              href={d.link}
              className="button"
              type="submit"
              // onClick={() => checkout(d.priceId)}
            >
              {d.linkText}
            </a>
          </from>
        ))}

        {data2.map((d) => (
          <div key={d.id} className="pricing-card">
            <div>
              <h6>{d.type}</h6>
              <h2>{d.price}</h2>
              <p>{d.text}</p>
              <ul>
                {d.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <a
              href={d.linkText}
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              {d.link}
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Pricing;
