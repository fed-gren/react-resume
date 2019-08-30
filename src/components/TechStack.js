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

import ContentsLayout from "./ContentsLayout";
import config from "../config";

const TechStack = styled.div`
  p {
    padding: 0.2rem;
  }
`;

const Icons = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

const joinTechStack = arr => arr.join(", ");

export default () => {
  return (
    <ContentsLayout title="기술 스택">
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
        <p>{joinTechStack(config.techStack.javascript)}</p>
        <p>{joinTechStack(config.techStack.markup)}</p>
        <p>{joinTechStack(config.techStack.devops)}</p>
        <p>{joinTechStack(config.techStack.tool)}</p>
      </TechStack>
    </ContentsLayout>
  );
};
