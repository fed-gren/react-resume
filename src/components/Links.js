import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { TiMail, TiExport } from "react-icons/ti";

const Links = styled.article`
  padding: 1rem 0;

  & > div {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;

    & > p {
      width: 5rem;
    }
  }

  p {
    padding: 0.2rem;
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
    <Links>
      <div>
        <p>
          Github
          <FaGithub />
        </p>
        https://github.com/fed-gren
        <a href="https://github.com/fed-gren" target="_blank">
          <TiExport />
        </a>
      </div>
      <div>
        <p>
          Email
          <TiMail />
        </p>
        <p>deveb22@gmail.com</p>
      </div>
    </Links>
  );
};
