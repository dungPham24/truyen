import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import imgs from "component/img/showanh/IMG_9526-min.jpg";
import imgs1 from "component/img/show vanphong/02B7F85A-85D5-4091-9BD3-D4566443D1DE-min.jpeg";
import imgs2 from "component/img/show vanphong/0ACD6CD2-D1E3-45F2-B9B3-2028696902BA-min.jpeg";
import imgs3 from "component/img/show vanphong/1755E93A-0B18-41F7-B52C-571D31C3A483-min.jpeg";
import imgs4 from "component/img/show vanphong/23D4A739-388E-48DE-B540-08AD105B277B-min.jpg";
import imgs5 from "component/img/show vanphong/305027AC-DA7D-4494-B586-F99F4240C177-min.jpeg";
import imgs6 from "component/img/show vanphong/4B68D7BF-2CA7-4BEC-8F2A-FF9689BDB4B7-min.jpg";
import imgs7 from "component/img/show vanphong/4C7BB0AF-E1B1-42AC-BEB4-332C35E100B8-min.jpg";
import imgs8 from "component/img/show vanphong/501CD942-9DA9-4AEC-B83B-4BFF1E5F7F54-min.jpeg";
import imgs9 from "component/img/show vanphong/CE3579C7-21FF-42E4-902F-D362776BB01E-min.jpg";
import imgs11 from "component/img/show vanphong/CF0D1885-B068-4851-BAD7-AEDEEE016E2B-min.jpg";
import imgs12 from "component/img/show vanphong/EBCBCD4D-ADDC-49F8-A97A-65A4228712C3-min.jpg";
import imgs13 from "component/img/show vanphong/IMG_1938-min.jpg";
import imgs14 from "component/img/show vanphong/IMG_4783-min.jpg";
import imgs15 from "component/img/show vanphong/IMG_7458-min.jpg";
import imgs16 from "component/img/show vanphong/IMG_7769-min.jpg";
import imgs17 from "component/img/show vanphong/IMG_9344-min.jpg";
import imgs18 from "component/img/show vanphong/IMG_9347-min.jpg";

export default class ShowVanPhong extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <h2>Tranh vẽ tường văn phòng </h2>
        <Homeslider>
          <Slider {...settings}>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs1} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs2} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs3} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs4} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs5} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs6} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs7} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs8} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs9} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs11} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs12} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs13} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs14} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs15} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs16} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs17} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs18} alt="" />
            </div>
          </Slider>
        </Homeslider>
      </>
    );
  }
}

const Homeslider = styled.div`
  width: 90%;
  margin: auto;
  & .imgCafe {
    width: 95%;
    height: 200px;
  }
`;
