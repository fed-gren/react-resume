import React from "react";
import config from "../config";
import styled from "styled-components";
import { TiExport } from "react-icons/ti";

import ContentsLayout from "./ContentsLayout";
import { Styled } from "./styles";

const Education = styled.div`
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
  & a:visited {
    color: black;
  }
  & a:hover {
    color: dimgray;
  }
`;

export default () => {
  return (
    <ContentsLayout title="교육">
      <Education>
        {config.education.map(({ title, start, end, contents, link }) => (
          <div key={title}>
            <h4>
              {title}
              <a href={link} target="_blank">
                <TiExport />
              </a>
            </h4>
            <p>
              {start} - {end}
            </p>
            {contents.map((details, idx) => (
              <Styled.Pre key={idx}>{details}</Styled.Pre>
            ))}
          </div>
        ))}
      </Education>
    </ContentsLayout>
  );
};
