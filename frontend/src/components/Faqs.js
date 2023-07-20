import React from "react";
import smallline from "../assets/small-line.svg";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useTranslation } from "react-i18next";

function Faqs() {
  const { t } = useTranslation();

  const items = [
    {
      header: t("f1"),
      content: t("f2"),
    },
    {
      header: t("f3"),
      content: t("f4"),
    },
    {
      header: t("f5"),
      content: t("f6"),
    },
    {
      header: t("f7"),
      content: t("f8"),
    },
    {
      header: t("f9"),
      content: t("f10"),
    },
    {
      header: t("f11"),
      content: t("f12"),
    },
    {
      header: t("f13"),
      content: t("f14"),
    },
    {
      header: t("f15"),
      content: t("f16"),
    },
    {
      header: t("f17"),
      content: t("f18"),
    },
  ];

  return (
    <article className="container mb200">
      <div className="container-header">
        <div className="abc">
          <p className="body20">FAQs</p>
          <img src={smallline} alt="" />
        </div>
        <h1 className="h1">✨ {t("FAQs")}</h1>
      </div>

      <Accordion className="mt120">
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
}

export default Faqs;
