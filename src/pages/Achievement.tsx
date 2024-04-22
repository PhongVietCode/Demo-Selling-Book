import { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./Achievement.style.css";
export const Achievement = () => {
  const [isCount, setisCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setisCount(true);
          entry.target.classList.add("statistic-item-show");
        } else {
          setisCount(false);
          entry.target.classList.remove("statistic-item-show");
        }
      });
    });
    const observerElement = document.querySelectorAll(".statistic-item");
    observerElement.forEach((el) => observer.observe(el));
  }, [isCount]);

  const observerHornor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
      } else {
        entry.target.classList.remove("slide-in-left");
      }
    });
  });
  const observerHornorElement = document.querySelectorAll(".slide-out-left");
  observerHornorElement.forEach((el) => observerHornor.observe(el));

  const companionNumber = 40;
  const copyrightSells = 34;
  const publishCountryNumber = 9;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: '2.1rem', fontWeight: 600, color:'var(--orange)' }}>Những thành tựu</div>
      <span style={{ fontWeight: 600, fontSize: 30, color:'var(--polynesian-blue)' }}>
        Những thành tựu tại các quốc gia
      </span>
      <div className="hornor-cotainer">
        <div className="hornor-item slide-out-left">
          <span className="hornor-index">1.</span>
          <span className="hornor-context">
            Cuốn sách sau 6 tháng phát hành đã bán được <span className="text-bold">2.500.000</span> bản trên toàn
            thế giới
          </span>
        </div>
        <div className="hornor-item slide-out-left">
          <span className="hornor-index">2.</span>
          <span className="hornor-context">
            Được bình chọn là cuốn sách bán chạy nhất tại <span className="text-bold">châu Âu, Nhật Bản,
            Brazil, Tây Ban Nha, Hàn Quốc, Mỹ, Đài Loan,..</span>
          </span>
        </div>
        <div className="hornor-item slide-out-left">
          <span className="hornor-index">3.</span>
          <span className="hornor-context">
            Được bình chọn là <span className="text-bold">JAPAN BOOK OF THE YEAR 2004</span> (cuốn sách hay nhất
            trong năm 2004 tại Nhật Bản)
          </span>
        </div>
        <div className="hornor-item slide-out-left">
          <span className="hornor-index">4.</span>
          <span className="hornor-context">
            Được nhận giải thưởng <span className="text-bold">2004 Shinpu Award</span> - là giải thưởng uy tín và
            cao quý nhất do các tập đoàn xuất bản và phát hành sách Nhật Bản
            trao tặng
          </span>
        </div>
      </div>
      <div className="comment-section">
        <div style={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Mọi người nghĩ gì về cuốn sách
        </div>
        <div className="comment-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 8 8"
          >
            <path
              fill="#7BC9FF"
              d="M0 1v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3V1zm5 0v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3V1z"
            />
          </svg>
          <div className="comment-context">
            Thật là tuyệt vời! Tôi chắc chắn cuốn sách sẽ đi vào lịch sử như một
            câu chuyện kinh điển. Cuốn sách hấp dẫn người đọc ở mọi lứa tuổi -
            từ trẻ em cho đến người lớn- giống như câu chuyện Hoàng Tử Bé của
            Antoine de Saint Exupéry.
          </div>
          <div className="comment-person">
            Philip Kotler - Chuyên gia Marketing
          </div>
        </div>
      </div>
      <span
        style={{
          fontWeight: 600,
          fontSize: '1.6rem',
          marginTop: "1.3rem",
          marginBottom: "1.5rem",
        }}
      >
        Các con số ấn tượng
      </span>
      <div className="statistic-section">
        <div className="statistic-item">
          {isCount && (
            <CountUp
              //   className="statistic-item"
              start={0}
              end={2500000}
              duration={2}
              delay={0.5}
            />
          )}
          + bản
          <div className="statistic-item-context">Số lượng sách đã bán</div>
        </div>
        <div className="statistic-item">
          {isCount && (
            <CountUp start={0} end={copyrightSells} duration={2} delay={0.5} />
          )}
          + quốc gia
          <div className="statistic-item-context">
            Số quốc gia mua bản quyền
          </div>
        </div>
        <div className="statistic-item">
          {isCount && (
            <CountUp
              start={0}
              end={publishCountryNumber}
              duration={2}
              delay={0.5}
            />
          )}
          + nước
          <div className="statistic-item-context">Số nước phát hành sách</div>
        </div>
        <div className="statistic-item">
          {isCount && (
            <CountUp start={0} end={companionNumber} duration={2} delay={0.5} />
          )}
          + người
          <div className="statistic-item-context">Số cộng sự</div>
        </div>
      </div>
    </div>
  );
};
