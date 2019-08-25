import React from "react";
import styled from "styled-components";

import TechStack from "./TechStack";

const Inro = styled.article`
  & > div {
    padding-bottom: 1.5rem;
  }
`;

export default () => {
  return (
    <Inro>
      <div>
        JavaScript, React를 좋아하는 프론트엔드 개발자입니다. 평소 테스트, 코드
        유지보수 및 UX에 관심이 많습니다.
      </div>
      <TechStack />
    </Inro>
  );
};
