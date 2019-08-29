import React from "react";
import config from "../config";
import styled from "styled-components";

import ContentsLayout from "./ContentsLayout";
import { Styled } from "./styles";

const CoverLetter = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 1.2rem;
  }

  & h4 {
    font-weight: 600;
    color: #333;
  }
`;

export default () => {
  return (
    <ContentsLayout title="자기소개서">
      <CoverLetter>
        {config.education.map(({ title, contents }) => (
          <div key={title}>
            <h4>{title}</h4>
            <Styled.Pre>{contents}</Styled.Pre>
          </div>
        ))}
      </CoverLetter>
    </ContentsLayout>
  );
};
