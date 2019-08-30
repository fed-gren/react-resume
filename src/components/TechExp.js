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
    <ContentsLayout title="경험">
      <Exp>
        {config.techExp.map(({ title, githubUrl, demoUrl, contents }) => (
          <TechExpLayout
            title={title}
            githubUrl={githubUrl}
            demoUrl={demoUrl}
            key={title}
          >
            <Styled.Pre>{contents}</Styled.Pre>
          </TechExpLayout>
        ))}
      </Exp>
    </ContentsLayout>
  );
};
