import React from "react";
import styled from "styled-components";

import ContentsLayout from "./ContentsLayout";
import config from "../config";
import { Styled } from "./styles";

export default () => {
  return (
    <ContentsLayout title="Intro">
      <Styled.Pre>{config.intro.message}</Styled.Pre>
    </ContentsLayout>
  );
};
