import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import imgs from "component/img/show cafe/1BAEFE91-9123-40C0-A0E6-5F7A31C74ABF.jpg";
import imgs1 from "component/img/show cafe/3DF2A309-C20B-4BC0-9BEE-1C7B8F81D56E.jpeg";
import imgs2 from "component/img/show cafe/511B92FB-C5DE-4D3B-AE92-40BE31CE789B.jpg";
import imgs3 from "component/img/show cafe/7215B6F3-B74B-4C77-9BB0-EBADE10A7384.jpeg";
import imgs4 from "component/img/show cafe/F022EA66-BDEA-4662-AB5D-B89FE4D8972C.jpeg";
import imgs5 from "component/img/show cafe/IMG_0056.jpg";
import imgs6 from "component/img/show cafe/IMG_0057.jpg";
import imgs7 from "component/img/show cafe/IMG_0059.jpg";
import imgs8 from "component/img/show cafe/IMG_1261.jpg";
import imgs9 from "component/img/show cafe/IMG_2497.jpg";
import imgs11 from "component/img/show cafe/IMG_2499.jpg";
import imgs12 from "component/img/show cafe/IMG_2583.jpg";
import imgs13 from "component/img/show cafe/IMG_2882.jpg";
import imgs14 from "component/img/show cafe/IMG_3007.jpg";
import imgs15 from "component/img/show cafe/IMG_3008.jpg";
import imgs16 from "component/img/show cafe/IMG_7506.jpg";
import imgs17 from "component/img/show cafe/IMG_8903.jpg";
import imgs18 from "component/img/show cafe/IMG_8904.jpg";
import imgs19 from "component/img/show cafe/IMG_8909.jpg";
import imgs20 from "component/img/show cafe/IMG_9345.jpg";
import imgs21 from "component/img/show cafe/IMG_9346.jpg";

export default class ShowCafes extends Component {
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
        <h2>Tranh vẽ tường quán Cafe</h2>
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
            <div>
              <img className="imgCafe" src={imgs19} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs20} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs21} alt="" />
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
