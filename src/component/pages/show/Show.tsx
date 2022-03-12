import Footer from "Footer/Footer";
import React from "react";
import styled from "styled-components";
import ShowCafe from "./showCafe/ShowCafe";
import ShowNh from "./showNhahang/ShowNhahang";

const Show = () => {
  return (
    <ShowS>
      <ShowCafe />
      <ShowNh />
      <Footer />
    </ShowS>
  );
};

export default Show;

const ShowS = styled.div`
  padding-top: 5%;
`;
