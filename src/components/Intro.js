import React from "react";

import ContentsLayout from "./ContentsLayout";
import config from "../config";

export default () => {
  return (
    <ContentsLayout title="Intro">
      <div>{config.intro.message}</div>
    </ContentsLayout>
  );
};
