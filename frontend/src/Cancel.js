import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Cancel() {
  return (
    <div>
      <Header />
      <main className="container-main">
        <div>
          <h2>Oh No! 😥</h2>
          <br />
          <h3>
            We noticed that your payment has been cancelled. Please try again!{" "}
            <br /> If the issue persists please contact us to assist you, Thank
            you!
          </h3>
        </div>
        <a className="button" href="/">
          Go Back Home
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default Cancel;
