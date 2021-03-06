import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
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

  & a,
  & a:visited {
    color: black;
  }
  & a:hover {
    color: dimgray;
  }
`;

export default () => {
  return (
    <ContentsLayout title="연락처">
      <Contact>
        <div>
          <p>
            Phone
            <FaPhoneVolume />
          </p>
          {config.contact.phone}
        </div>
        <div>
          <p>
            Email
            <TiMail />
          </p>
          {config.contact.email}
          <a href={config.contact.mailto} target="_blank">
            <TiExport />
          </a>
        </div>
      </Contact>
    </ContentsLayout>
  );
};
