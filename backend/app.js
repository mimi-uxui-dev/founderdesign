require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4242;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://checkout.stripe.com"],
  })
);

app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// const YOUR_DOMAIN = `http://localhost:${port}`;

app.post(`/checkout`, async (req, res) => {
  const item = req.body.item;
  console.log("⚡⚡⚡ Item => ", item.price);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: item.price,
        quantity: 1,
      },
    ],
    mode: "subscription",
    // success_url: `${YOUR_DOMAIN}/success`,
    // cancel_url: `${YOUR_DOMAIN}/canceled`,
    success_url: "http://founderdesign.io/success",
    cancel_url: "http://founderdesign.io/canceled",
  });

  res.json({ url: session.url });
});

app.listen(port, () =>
  console.log(
    "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Server start at port ",
    port
  )
);
