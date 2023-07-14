import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Imprint() {
  return (
    <article className="policies">
      <Header />
      <main className="container footercontent">
        <div>
          <h2>Impressum</h2>
          <br />
          <h3>Impressum</h3>
          <p>
            The Site accessible under https://founderdesign.io and all its
            trademarks and other intellectual property rights are sole property
            of FounderDesign.io, Gubelstrasse 15, 6300 Zug, Switzerland. Please
            team@founderdesign.io for any questions.
          </p>
        </div>
      </main>
      <Footer />
    </article>
  );
}

export default Imprint;
