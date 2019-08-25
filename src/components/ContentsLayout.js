import React from "react";
import styled from "styled-components";

import Subtitle from "./Subtitle";

const Contents = styled.article`
  display: flex;

  & > div {
    padding-bottom: 1rem;
  }
`;

export default function ContentsLayout({ children, title, term }) {
  return (
    <Contents>
      <Subtitle title={title} term={term} />
      {children}
    </Contents>
  );
}
