import "./Home.style.css";
import bookImg from "../assets/book.jpg";
import Lottie from "react-lottie";
// import { usePayOS, PayOSConfig } from "payos-checkout";
// import bubles from "../assets/bubles.json";
import axios from "axios";
import bubles_2 from "../assets/bubles-2.json";
import loading from "../assets/loading.json";
import { useEffect, useState } from "react";
export const Home = () => {
  const [completePayment, setCompletePayment] = useState(false);
  const [processDownload, setProcessDownload] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bubles_2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const createPaymentLink = () => {
    axios
      .post("http://localhost:3000/create-payment-link")
      .then((response) => {
        // Handle the response (e.g., redirect to the payment link)
        // console.log("Payment link created:", response.data);
        // window.location.href = response.data.checkoutUrl;
        console.log(response.data);
        const link = document.createElement("a");
        link.href = response.data;
        link.click();
      })
      .catch((error) => {
        console.error("Error creating payment link:", error);
      });
  };
  const downloadBook = () => {
    setProcessDownload(true);
    const link = document.createElement("a");
    link.href =
      "https://drive.usercontent.google.com/u/1/uc?id=1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol&export=download";
    link.click();
    setTimeout(() => {
      setProcessDownload(false);
    }, 2000);
  };
  useEffect(() => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get("status");
    if (status != "CANCELLED" && status != null) {
      setCompletePayment(true);
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="introduction">
          <div className="title">Xin chào bạn đọc ,</div>
          <div className="subtitle">
            Chào mừng bạn đến với <span className="book-name">Good Luck</span>.
          </div>
          <div className="description">
            <span
              style={{ fontWeight: "500", color: "var(--polynesian-blue)" }}
            >
              Good luck - Bí mật của May mắn{" "}
            </span>
            là cuốn sách nổi tiếng và độc đáo nhất được Nhà xuất bản Jossey-Bass
            xuất bản ngày 1/9/2004. Theo các công ty bản quyền châu Âu, Good
            Luck là cuốn sách đầu tiên trong lịch sử hiện đại bán được bản quyền
            dịch ra 15 ngôn ngữ trên thế giới trước khi được xuất bản ở bất kì
            quốc gia nào.
          </div>
          <button
            className="get-book-btn"
            onClick={() => {
              if (completePayment) {
                downloadBook();
              } else {
                createPaymentLink();
              }
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {completePayment ? "Tải sách" : "Mua sách"}
          </button>
          <div style={{position:"relative"}}>
            {processDownload ? (
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: loading,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                width={100}
                height={100}
              />
            ) : null}
          </div>
        </div>
        <div className="img-container">
          <img className="img-container-book" src={bookImg} alt="book img" />
          <Lottie
            options={defaultOptions}
            width={800}
            height={600}
            style={{ position: "absolute" }}
          />
        </div>
      </div>
    </>
  );
};
