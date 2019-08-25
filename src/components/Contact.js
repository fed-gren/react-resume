import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiMail, TiExport } from "react-icons/ti";
import config from "../config";
import styled from "styled-components";

import ContentsLayout from "./ContentsLayout";

const Contact = styled.div`
  & > div {
    display: flex;

    & > p {
      width: 5rem;
    }
  }

  & a:visited {
    color: black;
  }
  & a:hover {
    color: dimgray;
  }
`;

export default () => {
  return (
    <ContentsLayout title="Contact">
      <Contact>
        <div>
          <p>
            Github
            <FaGithub />
          </p>
          {config.contact.github}
          <a href={config.contact.github} target="_blank">
            <TiExport />
          </a>
        </div>
        <div>
          <p>
            Email
            <TiMail />
          </p>
          {config.contact.email}
        </div>
      </Contact>
    </ContentsLayout>
  );
};
