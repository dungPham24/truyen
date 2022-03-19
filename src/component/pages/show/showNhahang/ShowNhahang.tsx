import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import imgs from "component/img/show quan bia/23DF34E3-AA9B-454E-AB12-4D61E44E0684-min.jpeg";
import imgs1 from "component/img/show quan bia/2EA3E057-E2D1-4D68-9546-443F72D677B2-min.jpeg";
import imgs2 from "component/img/show quan bia/495409B6-45C0-47CD-9CA6-89DA15B4D457-min.jpeg";
import imgs3 from "component/img/show quan bia/65572505-EFF3-4A40-9F53-2414D59BB396-min.jpeg";
import imgs4 from "component/img/show quan bia/784565BA-4789-404A-AE2C-FF2485491BE5-min.jpeg";
import imgs5 from "component/img/show quan bia/7AFEF750-5CC9-4A19-AD25-20E6178AEBE6-min.jpeg";
import imgs6 from "component/img/show quan bia/7C55F837-B236-403F-A6AD-74F752341694-min.jpeg";
import imgs7 from "component/img/show quan bia/A0FBF9F1-0BEB-4436-958E-B9C7ABE72EE6-min.jpeg";
import imgs8 from "component/img/show quan bia/D16FCDB0-8B75-442E-B66D-771C108DEF04-min.jpg";
import imgs9 from "component/img/show quan bia/D79502AF-030B-416B-B6D5-35B8558278C0-min.jpeg";
import imgs10 from "component/img/show quan bia/DEF141A5-C8C6-493A-BE16-402336568F37-min.jpeg";
import imgs11 from "component/img/show quan bia/E58079DB-083D-4C29-BE2A-E6B5221FF16F-min.jpeg";
import imgs12 from "component/img/show quan bia/IMG_2156-min.jpg";
import imgs13 from "component/img/show quan bia/IMG_2157-min.jpg";
import imgs14 from "component/img/show quan bia/IMG_2403-min.jpg";
import imgs15 from "component/img/show quan bia/IMG_2405-min.jpg";
import imgs16 from "component/img/show quan bia/IMG_8605-min.jpg";
import imgs17 from "component/img/show quan bia/IMG_9250_polarr-min.jpg";
import imgs18 from "component/img/show quan bia/IMG_9283-min.jpg";
import imgs19 from "component/img/show quan bia/IMG_9301-min.jpg";
export default class ShowNh extends Component {
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
        <h2> Tranh vẽ quán bi a</h2>
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
              <img className="imgCafe" src={imgs10} alt="" />
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
