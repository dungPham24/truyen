import React, { useState } from "react";
import styled from "styled-components";

const Qustionone = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <QuestionOne>
      <h2 onClick={() => setShow(!show)} className="questionh2">
        câu hỏi
      </h2>
      {show && <p className="question-p">trả lời câu hỏi</p>}
    </QuestionOne>
  );
};

export default Qustionone;
const QuestionOne = styled.div`
  & .question-p {
    background-color: #fff;
    padding: 0 10px;
  }
  & .questionh2 {
    background-color: #ed1c2a;
    color: #fff;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
