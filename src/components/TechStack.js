import React from "react";
import styled from "styled-components";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass
} from "react-icons/fa";
import { DiGit, DiVisualstudio, DiResponsive } from "react-icons/di";
import config from "../config";

const TechStack = styled.div`
  padding: 1rem 0;

  p {
    padding: 0.2rem;
    margin: 0.4rem 0;
  }
`;

const Icons = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

export default () => {
  return (
    <TechStack>
      <Icons>
        <FaJsSquare color={config.iconColors.javascript} />
        <FaReact color={config.iconColors.react} />
        <FaHtml5 color={config.iconColors.html5} />
        <FaCss3Alt color={config.iconColors.css3} />
        <FaSass color={config.iconColors.sass} />
        <DiResponsive />
        <DiGit color={config.iconColors.git} />
        <DiVisualstudio color={config.iconColors.vscode} />
      </Icons>
      <p>JavaScript , React</p>
      <p>HTML , CSS , Sass , 반응형 웹</p>
      <p>Git , VSCode</p>
      <p>Jest</p>
    </TechStack>
  );
};
