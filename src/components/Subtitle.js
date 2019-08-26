import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 10rem;
  color: #333;
  flex-shrink: 0;
  flex-grow: 0;

  & > p.term {
    color: #888;
    font-size: 0.7rem;
  }
`;

export default ({ title, term }) => {
  return (
    <Subtitle>
      <p>{title}</p>
      <p className="term">{term}</p>
    </Subtitle>
  );
};
