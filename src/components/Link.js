import React from "react";
import { FaGithub, FaBlog } from "react-icons/fa";
import { TiExport } from "react-icons/ti";
import config from "../config";
import styled from "styled-components";

import ContentsLayout from "./ContentsLayout";

const Link = styled.div`
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
    <ContentsLayout title="링크">
      <Link>
        <div>
          <p>
            Github
            <FaGithub />
          </p>
          {config.link.github}
          <a href={config.link.github} target="_blank">
            <TiExport />
          </a>
        </div>
        <div>
          <p>
            Blog
            <FaBlog />
          </p>
          {config.link.blog}
          <a href={config.link.blog} target="_blank">
            <TiExport />
          </a>
        </div>
      </Link>
    </ContentsLayout>
  );
};
