import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import imgs from "component/img/showanh/IMG_9526-min.jpg";
import imgs1 from "component/img/showanh/IMG_9527-min.jpg";
import imgs2 from "component/img/showanh/IMG_9528-min.jpg";
import imgs3 from "component/img/showanh/IMG_9529-min.jpg";
import imgs4 from "component/img/showanh/IMG_9530-min.jpg";
import imgs5 from "component/img/showanh/IMG_9531-min.jpg";
import imgs6 from "component/img/showanh/IMG_9532-min.jpg";
import imgs7 from "component/img/showanh/IMG_9533-min.jpg";
import imgs8 from "component/img/showanh/IMG_9534-min.jpg";
import imgs9 from "component/img/showanh/IMG_9535-min.jpg";
import imgs11 from "component/img/showanh/IMG_9537-min.jpg";
import imgs12 from "component/img/showanh/IMG_9538-min.jpg";
import imgs13 from "component/img/showanh/IMG_9539-min.jpg";
import imgs14 from "component/img/showanh/IMG_9540-min.jpg";
import imgs15 from "component/img/showanh/IMG_9552-min.jpg";
import imgs16 from "component/img/showanh/IMG_9553-min.jpg";
import imgs17 from "component/img/showanh/IMG_9554-min.jpg";
import imgs18 from "component/img/showanh/IMG_9571-min.jpg";

export default class ShowManon extends Component {
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
        <h2>Tranh tường mầm non</h2>
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
  }
`;
