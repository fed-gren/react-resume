import React from "react";
import styled from "styled-components";
import config from "../config";

import ContentsLayout from "./ContentsLayout";
import TechExpLayout from "./TechExpLayout";
import { Styled } from "./styles";

const Exp = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <ContentsLayout title="Tech exp.">
      <Exp>
        {config.techExp.map(({ title, url, contents }) => (
          <TechExpLayout title={title} url={url} key={title}>
            <Styled.Pre>{contents}</Styled.Pre>
          </TechExpLayout>
        ))}
      </Exp>
    </ContentsLayout>
  );
};
