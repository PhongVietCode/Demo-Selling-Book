import "./About.style.css";
import author1 from "../assets/alex-rovira.png";
import author2 from "../assets/fernado-trias-de-Bes.png";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import line from "../assets/line.json";
export const About = () => {
  const [isInter, setIsInter] = useState(false);
  useEffect(() => {
    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-right");
          setIsInter(true);
        } else {
          entry.target.classList.remove("slide-in-right");
          setIsInter(false);
        }
      });
    });
    const observerElementRight = document.querySelectorAll(".slide-out-right");
    observerElementRight.forEach((el) => observerRight.observe(el));
  }, [isInter]);

  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
      } else {
        entry.target.classList.remove("slide-in-left");
      }
    });
  });
  const observerElementLeft = document.querySelectorAll(".slide-out-left");
  observerElementLeft.forEach((el) => observerLeft.observe(el));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: line,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          textTransform: "uppercase",
          color: "var(--orange)",
          fontSize: "1.4rem",
        }}
      >
        Về tác giả
      </div>
      <div
        style={{
          fontSize: "2.2rem",
          color: "var(--penn-blue-1)",
        }}
      >
        Một chút thông tin về các tác giả
      </div>
      <Lottie options={defaultOptions} width={400} height={9} />
      <div className="about-section">
        <div
          className="slide-out-left"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: 20,
            flex: 1,
          }}
        >
          <div className="author">
            <img style={{ borderRadius: ".8rem" }} src={author1} />
            <div
              style={{
                textAlign: "center",
                color: "var(--white-salt)",
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Alex Rovia
            </div>
          </div>
          <div className="author">
            <img style={{ borderRadius: ".8rem" }} src={author2} />
            <div
              style={{
                textAlign: "center",
                color: "var(--white-salt)",
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Fernado Trias de Bes
            </div>
          </div>
        </div>
        <div className="slide-out-right" style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 300,
              minWidth: "400px",
              fontSize: "1.2rem",
            }}
          >
            Tác giả <span style={{ fontWeight: "500" }}>Alex Rovira</span> và{" "}
            <span style={{ fontWeight: "500" }}>Fernado Trias de Bes</span> là
            hai người bạn thân, với tính cách đặc biệt, tư duy sống sáng tạo,
            tích cực say mê thích thử thách với ý tưởng mới. Họ cùng đồng sáng
            lập công ty Salvetti & Llombart, với 40 cộng sự hàng đầu ở
            Barcelona, Tây Ban Nha - chuyên nghiên cứu thị trường, tư vấn cho
            các tập đoàn đa quốc gia khổng lồ.
          </div>
          <div>
            <div className="detail-author-container">
              <div
                className="detail-author-title"
                style={{ color: "var(--penn-blue-1)" }}
              >
                Tên các tác giả:
              </div>
              <div className="detail-author-context">
                Alex Rovia và Fernado Trias de Bes
              </div>
            </div>
            <div className="detail-author-container">
              <div
                className="detail-author-title"
                style={{ color: "var(--penn-blue-1)" }}
              >
                Sống tại:
              </div>
              <div className="detail-author-context">
                Barcelona, Tây Ban Nha
              </div>
            </div>
            <div className="detail-author-container">
              <div
                className="detail-author-title"
                style={{ color: "var(--penn-blue-1)" }}
              >
                Tên công ty:
              </div>
              <div className="detail-author-context">Salvetti & Llombart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
