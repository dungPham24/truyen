import Footer from "Footer/Footer";
import styled from "styled-components";
import ShowCafes from "./showCafenhahang/ShowCafe";
import ShowManon from "./ShowManon/ShowManon";
import ShowNh from "./showNhahang/ShowNhahang";
import ShowVanPhong from "./showvanphong/ShowVanPhong";

const Show = () => {
  return (
    <ShowS>
      <ShowManon />
      <ShowNh />
      <ShowVanPhong />
      <ShowCafes />
      <Footer />
    </ShowS>
  );
};

export default Show;

const ShowS = styled.div`
  padding-top: 5%;
`;
