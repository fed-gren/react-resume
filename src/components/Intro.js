import React from "react";

import ContentsLayout from "./ContentsLayout";
import config from "../config";

export default () => {
  return (
    <ContentsLayout title="Intro">
      <pre>{config.intro.message}</pre>
    </ContentsLayout>
  );
};
