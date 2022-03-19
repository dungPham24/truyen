import React from "react";
import styled from "styled-components";
import FeedbackImg from "../../../img/bg-image-red.png";
import ImgFeedback from "../../../img/reason1.png";
import ImgFeedback1 from "../../../img/reason2.png";
import ImgFeedback2 from "../../../img/reason3.png";
import ImgFeedback3 from "../../../img/reason4.png";
import ImgFeedback4 from "../../../img/reason5.png";
const FeedbackHome = () => {
  return (
    <FeedbackHomes>
      <h2 className="feedbackh2">5 LÝ DO BẠN NÊN CHỌN CHÚNG TÔI</h2>

      <div>
        <div className="girdFeedback">
          <div>
            <img src={ImgFeedback} alt="" />
            <p>1 : Thi công nhanh , đảm bảo tiến độ</p>
          </div>
          <div>
            <img src={ImgFeedback1} alt="" />
            <p>2 : Đội ngũ hoạ sĩ tay nghề cao</p>
          </div>
          <div>
            <img src={ImgFeedback2} alt="" />
            <p>3 : Giá cả cạnh tranh nhất thị trường</p>
          </div>
          <div>
            <img src={ImgFeedback3} alt="" />
            <p>4 : Tư vấn thiết kế mẫu miễn phí</p>
          </div>
          <div>
            <img src={ImgFeedback4} alt="" />
            <p>5 : Chế độ bảo hành lâu dài</p>
          </div>
        </div>
      </div>
    </FeedbackHomes>
  );
};

export default FeedbackHome;

const FeedbackHomes = styled.div`
  background-image: url(${FeedbackImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #000;
  padding-top: 100px;
  & .girdFeedback {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    text-align: center;
    padding: 20px 50px 200px 20px;
    @media (max-width: 800px) {
      display: block;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
  & .feedbackh2 {
    color: #fff;
    padding-top: 100px;
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;
