import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import imgs from "component/img/productimg2.jpg";
export default class ShowCafe extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <>
        <h2> Tranh vẽ quán Cafe</h2>
        <Homeslider>
          <Slider {...settings}>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
            </div>
            <div>
              <img className="imgCafe" src={imgs} alt="" />
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
