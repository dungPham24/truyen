import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider from "../../../img/sliderimg.jpg";
import slider1 from "../../../img/sliderimg2.jpg";
import slider2 from "../../../img/sliderImg3.jpg";
import slider3 from "../../../img/sliderimg4.jpg";
import slider4 from "../../../img/slider5.jpg";
import slider5 from "../../../img/slider6.jpg";
import styled from "styled-components";
const SlierHome = () => {
  return (
    <SliderHome>
      <Carousel
        showArrows={false}
        autoFocus={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={4000}
        showIndicators={false}
        showThumbs={false}
        useKeyboardArrows={true}
        stopOnHover={false}
      >
        <div>
          <img className="sliderHome" alt="" src={slider} />
          <p className="legend">Sự hài lòng của bạn là sứ mệnh của tôi</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider1} />
          <p className="legend  legend1">Thi công Nhanh - Sạch - Đẹp</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider2} />
          <p className="legend">Chất lượng tạo niềm tin</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider3} />
          <p className="legend">
            Tranh tường Hà nội mang cả thế giới tới ngôi nhà của bạn
          </p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider4} />
          <p className="legend">Phục vụ những gì bạn xứng đáng</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider5} />
          <p className="legend">
            Chúng tôi tin vào dịch vụ của mình , và bạn biết điều đó
          </p>
        </div>
      </Carousel>
    </SliderHome>
  );
};

export default SlierHome;

const SliderHome = styled.div`
  & .legend {
    background-color: #ed1c2a !important;
    width: 50% !important;
    margin-right: 20px;
    left: 70% !important;
    opacity: 1 !important;
    font-size: 22px !important;
    @media (max-width: 800px) {
      font-size: 10px !important;
    }
  }
  & .sliderHome {
    height: 400px !important;
    border-radius: 20px;
  }
  & .carousel-status {
    display: none !important ;
  }
  @media (max-width: 800px) {
    padding-top: 2%;
  }
  /* @media (max-width: 600px) {
    height: 50px;
  } */
`;