import PaginatedItems from "component/panigate/panigate";
import React from "react";
import styled from "styled-components";

const ProductHome = () => {
  return (
    <ProductHomes>
      <div className="ProductHome">
        <h2 className="productH2">sản phẩm nổi bật</h2>
      </div>
      <div></div>
      <PaginatedItems itemsPerPage={9} />
    </ProductHomes>
  );
};

export default ProductHome;

const ProductHomes = styled.div`
  max-width: 90%;
  margin: auto;
  & .ProductHome {
    border-radius: 4px;
    text-align: center;
    color: #ed1c2a;
    text-transform: uppercase;
    text-align: start;
  }
  & .productH2 {
    /* font-size: 18px; */
  }
`;
