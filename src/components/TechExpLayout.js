import React from "react";
import styled from "styled-components";
import config from "../config";

const ExpContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const ExpTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > h4 {
    font-weight: 600;
    color: #333;
  }

  & button {
    width: 4rem;
    height: 1.8rem;
    cursor: pointer;
    background-color: #444;
    color: #eee;
    border-radius: 0.3rem;
    margin-left: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
      background: #000;
    }

    &:focus {
      outline: none;
    }
  }
`;

const LinkButton = styled.button`
  width: 4rem;
  height: 2rem;
`;

export default function TechExpContents({ title, url, children }) {
  return (
    <ExpContents>
      <ExpTitle>
        <h4>{title}</h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <LinkButton>Github</LinkButton>
        </a>
      </ExpTitle>
      {children}
    </ExpContents>
  );
}
