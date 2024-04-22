import PayOS from "@payos/node";
import express from 'express';
import cors from 'cors'
const payos = new PayOS(
  "af4d68c1-1ffd-4153-bf95-1f53a4d8e855",
  "db67374a-6811-443e-99ac-ee39f89b9e71",
  "44a462937ef41b595b125742a39df6cd033fcf26a88f9e14e27ea3ac1ca4fadd"
);
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
const DOMAIN = "http://localhost:5173";
app.post("/create-payment-link", async (req, res) => {
  const currentDate = new Date();
  const timeInMilliseconds = currentDate.getTime();
  const order = {
    orderCode: timeInMilliseconds,
    amount: 5000,
    description: "Thanh toan don hang",
    cancelUrl: `${DOMAIN}`,
    returnUrl: `${DOMAIN}`,
  };
  const paymentLinkData = await payos.createPaymentLink(order);
  console.log(paymentLinkData)
  res.send(paymentLinkData.checkoutUrl)
});
// https://c66c-171-252-153-9.ngrok-free.app/receive-hook
app.post("/receive-hook", async (req, res) => {
  console.log(req.body);
  res.json();
});
app.listen(3000, () => console.log("Listen on port 3000"));
