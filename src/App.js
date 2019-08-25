import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

import Resume from "./components/Resume";

const MyApp = styled.div`
  width: 100%;
  min-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222; /* fallback for old browsers */
  background-repeat: no-repeat;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.5rem;
`;

export default hot(() => {
  return (
    <MyApp>
      <Reset />
      <Resume />
    </MyApp>
  );
});
