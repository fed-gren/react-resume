import React from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";
import config from "../config";

import Intro from "./Intro";
import Links from "./Links";

const Resume = styled.section`
  border: 1px solid darkgray;
  width: 65%;
  margin: 2rem auto;
  background-color: #eee;
  border-radius: 0.4rem;
  padding: 2rem 2rem;
  -webkit-box-shadow: 0px 39px 41px 3px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 39px 41px 3px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 39px 41px 3px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  position: relative;

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.8rem;

    &:hover {
      cursor: pointer;
      color: ${config.keyColor};
    }
  }

  article,
  footer {
    border-top: 1px solid gray;
    padding: 2rem 0;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ResumeMain = styled.main`
  h1 {
    font-weight: 100;
    font-size: 4rem;
    padding: 1.5rem 0;
    color: #333;
  }

  h3 {
    font-weight: 700;
    font-size: 1.7rem;
    padding: 1.5rem 0;
    color: #333;
  }

  .fe {
    color: ${config.keyColor};
    transition: 0.8s color;
  }
`;

export default () => {
  return (
    <Resume>
      <header>
        <FaRegFilePdf title="pdf로 저장하기" />
      </header>
      <ResumeMain>
        <h1>안녕하세요.</h1>
        <h3>
          “<span className="fe">프론트엔드</span>” 개발자 이은빈 입니다.
        </h3>
        <Intro />
        <Links />
        {/* <article className="links">
          <div>
            <h4>
              Github
              <FaGithub />
            </h4>
            <a href="https://github.com/fed-gren">
              https://github.com/fed-gren
            </a>
          </div>
          <div>
            <h4>Email</h4>
            <p>deveb22@gmail.com</p>
          </div>
        </article> */}
        <article>
          기술 경험 (배포 주소 남기기) 후보들
          <div>
            React 타자연습 : 나에게 필요한 무언가를 만들어본 경험. 리액트로 처음
            만들어본 웹 애플리케이션
          </div>
          <div>Amazon clone : carousel, 자동완성 등의 UI 만들어 본 경험</div>
          <div>
            Array parser : parsing 과정에 대한 이해, tree 구조에 대한 이해
          </div>
          <div>my-react-starter : webpack, babel 사용법에 대한 공부</div>
        </article>
        <article>
          기간, 과정명, 수료 여부
          <p>
            교육 : 코드스쿼드 과정 수료
            https://codesquad.kr/page/masters/fe.html
          </p>
          <p>전자공학부 졸업</p>
        </article>
        <article>
          <p>deveb22@gmail.com</p>
        </article>
      </ResumeMain>
      <footer>
        <p>끝까지 읽어주셔서 감사합니다.</p>
      </footer>
    </Resume>
  );
};
