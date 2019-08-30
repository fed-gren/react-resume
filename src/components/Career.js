import React from "react";
import config from "../config";
import styled from "styled-components";

import ContentsLayout from "./ContentsLayout";
import { Styled } from "./styles";

const Career = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 1.2rem;
  }

  & h4 {
    font-weight: 600;
    color: #333;
  }

  & p {
    color: #777;
    margin-bottom: 0.4rem;
  }
`;

export default () => {
  return (
    <ContentsLayout title="경력">
      <Career>
        {config.career.map(({ title, start, end, contents }) => (
          <div key={title}>
            <h4>{title}</h4>
            <p>
              {start} - {end}
            </p>
            {contents.map((details, idx) => (
              <Styled.Pre key={idx}>{details}</Styled.Pre>
            ))}
          </div>
        ))}
      </Career>
    </ContentsLayout>
  );
};
