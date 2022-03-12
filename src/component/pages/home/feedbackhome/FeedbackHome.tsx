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
            <p>
              ĐHQC áp dụng hệ thống phần mềm đặt hàng thông minh, quý khách chủ
              động chọn hàng trực tiếp trên website của xưởng tại Quảng Châu mà
              không phải qua bất kỳ bên trung gian nào khác.
            </p>
          </div>
          <div>
            <img src={ImgFeedback1} alt="" />
            <p>
              Đội ngũ tư vấn kinh nghiệm, nhiệt tình và am hiểu tính chất cũng
              như đặc điểm các xưởng tại Quảng Châu. Luôn đảm bảo cho quý khách
              sự hài lòng khi hàng về tới Việt Nam.
            </p>
          </div>
          <div>
            <img src={ImgFeedback2} alt="" />
            <p>
              Chi phí đơn hàng trên phần mềm là chi phí cuối cùng bạn phải thanh
              toán khi hàng về tới Việt Nam, tuyệt đối không có chi phí phát
              sinh khác.
            </p>
          </div>
          <div>
            <img src={ImgFeedback3} alt="" />
            <p>
              Hàng hóa được chúng tôi kiểm tra kỹ tại kho Quảng Châu trước khi
              gửi về Việt Nam.
            </p>
          </div>
          <div>
            <img src={ImgFeedback4} alt="" />
            <p>
              Quy trình làm việc chuyên nghiệp, linh động, nhanh chóng giúp bạn
              tiết kiệm thời gian và chi phí
            </p>
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
