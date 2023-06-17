import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Success() {
  return (
    <div>
      <Header />
      <main className="container-main">
        <div>
          <h2>Woohoo! 🎉</h2>
          <br />
          <h3>
            Thank you for your subscribing! We'll reachout to you in less than
            24H to set a meeting to discuss the details of your project!
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

export default Success;
