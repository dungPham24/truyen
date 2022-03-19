import Footer from "Footer/Footer";
import React from "react";
import styled from "styled-components";
import ShowCafe from "./ShowManon/ShowManon";
import ShowNh from "./showNhahang/ShowNhahang";
import ShowVanPhong from "./showvanphong/ShowVanPhong";

const Show = () => {
  return (
    <ShowS>
      <ShowCafe />
      <ShowNh />
      <ShowVanPhong />
      <Footer />
    </ShowS>
  );
};

export default Show;

const ShowS = styled.div`
  padding-top: 5%;
`;
