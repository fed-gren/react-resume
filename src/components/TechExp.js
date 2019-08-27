import React from "react";
import styled from "styled-components";
import config from "../config";

import ContentsLayout from "./ContentsLayout";
import TechExpLayout from "./TechExpLayout";

const Exp = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <ContentsLayout title="Tech exp.">
      <Exp>
        {config.techExp.map(el => (
          <TechExpLayout title={el.title} url={el.url}>
            <p>{el.contents}</p>
          </TechExpLayout>
        ))}
      </Exp>
    </ContentsLayout>
  );
};
