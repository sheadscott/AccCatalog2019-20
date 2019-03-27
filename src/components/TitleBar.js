import React from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarNavigationIcon,
  TopAppBarActionItem
} from "rmwc/TopAppBar";
import { Icon } from "rmwc/Icon";

import styled from 'styled-components';

const SiteTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
`;

const SkipToMain = styled.a`
  background: #ffd521;
  color: black;
  padding: 5px;
  position: absolute;
  left: 0;
  top: -999em;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(0,0,0,0.5);

  &:focus {
    top: 0;
    color: #05243a;
  }
`;

const letter = {
  fill: "#fff"
};

const TitleBar = (props) => (
  <TopAppBar className="app__top-app-bar" style={{ backgroundColor: '#4d4d4d', position: 'static' }}>
    <SkipToMain href="#main">Skip to Main Content</SkipToMain>
    <TopAppBarRow>
      <TopAppBarSection alignStart>
        <a href="http://www.austincc.edu">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288 100"
            style={{
              width: "90px",
              position: "relative",
              top: "-2px"
            }}
          >
            <title>Austin Community College</title>
            <g className="star">
              <path
                style={{ fill: "#009B7C" }}
                d="M52.8,32.6L56,8.1l19.3,18.8"
              />
              <path
                style={{ fill: "#007AC2" }}
                d="M57.4,59.8l3.5-20.6l61.5-15.4L75.3,55.5l20.6,36.1"
              />
              <path
                style={{ fill: "#EF3E42" }}
                d="M37,50.4L7.6,31.1l44.3,9l-1.9,15L16.4,93.2"
              />
              <path
                style={{ fill: "#FFD520" }}
                d="M28,84.3l29.3-18.6l39.5,32.1L56.1,77.7"
              />
            </g>

            <g className="text small">
              <path
                style={letter}
                d="M118.9,66.6c-1.9,4.6-3.8,9.1-5.7,13.7c-0.4,0.8-0.6,1.7-0.8,2.6c-0.4,2,0,3.8,1.6,5.3c0.2,0.2,0.6,0.4,0.6,0.9c-4.6,0-9.2,0-14.1,0c4.4-3.9,5.8-9,7.8-13.9c5.2-12.9,10.3-25.9,15.4-38.9c0.1-0.3,0.2-0.5,0.3-0.8c0.8-2.5,1.4-5-1.6-7.2c5,0,9.5,0,14.1,0c0.5,0.4,0.6,1.1,0.8,1.7c6,15.9,12,31.8,18,47.7c1.5,4.1,3.6,7.9,7,10.7c0.1,0.1,0.3,0.2,0.2,0.6c-5.6,0-11.2,0-17,0c0.2-0.8,0.9-1.2,1.3-1.7c0.9-1.1,1.3-2.3,0.8-3.8c-1.3-4-2.9-7.9-4.4-11.8c-0.6-1.7-1.3-3.4-2-5.2C133.8,66.6,126.4,66.6,118.9,66.6z M138.8,60.1c-2.8-7.6-5.5-15-8.2-22.5c-0.1,0-0.3,0-0.4,0c-3,7.4-5.9,14.9-9,22.5C127.3,60.1,132.9,60.1,138.8,60.1z"
              />
              <path
                style={letter}
                d="M205.1,29.2c0,3.2,0,6.4,0,9.8c-0.9-0.4-1.6-0.7-2.3-1c-3.9-1.9-7.9-3.1-12.3-3.2c-11.5-0.3-20,6.6-22.1,16.7c-1.3,6.4-0.9,12.8,1.9,18.9c4.1,8.9,13.2,13.5,22.8,12.5c5.5-0.6,10.4-2.7,15.2-5.2c0.5-0.3,0.9-0.7,1.8-0.6c-1.4,3.6-2.8,7.1-4.3,10.7c-3.1,1.2-6.3,2-9.5,2.5c-8.2,1.2-16.1,0-23.5-3.9c-8.7-4.6-13.8-12-15.3-21.6c-2.1-13,2.4-23.6,12.8-31.6c4.9-3.8,10.7-5.7,16.9-6.2c5.5-0.5,10.9,0.2,16.2,1.7C204,28.7,204.5,28.8,205.1,29.2z"
              />
              <path
                style={letter}
                d="M259.3,29.2c0,3.2,0,6.4,0,9.8c-0.9-0.4-1.6-0.7-2.3-1c-3.9-1.9-7.9-3.1-12.3-3.2c-11.5-0.3-20,6.6-22.1,16.7c-1.3,6.4-0.9,12.8,1.9,18.9c4.1,8.9,13.2,13.5,22.8,12.5c5.5-0.6,10.4-2.7,15.2-5.2c0.5-0.3,0.9-0.7,1.8-0.6c-1.4,3.6-2.8,7.1-4.3,10.7c-3.1,1.2-6.3,2-9.5,2.5c-8.2,1.2-16.1,0-23.5-3.9c-8.7-4.6-13.8-12-15.3-21.6c-2.1-13,2.4-23.6,12.8-31.6c4.9-3.8,10.7-5.7,16.9-6.2c5.5-0.5,10.9,0.2,16.2,1.7C258.2,28.7,258.7,28.8,259.3,29.2z"
              />
            </g>
          </svg>
        </a>
        <TopAppBarTitle style={{ fontWeight: "normal" }}>
          <a href="/" style={{ color: "white" }}>
            {props.title}
          </a>
        </TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection alignEnd>

        <form
          id="searchForm"
          className="searchForm expanded"
          action="/search/"
          method="get"
        >
          <label htmlFor="searchFormInput" className="show-for-sr">
            Search Input
                </label>
          <Input
            type="text"
            name="q"
            id="searchFormInput"
            placeholder="search"
          />
          <button type="submit">
            <span>Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fill=""
                d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
              />
            </svg>
          </button>
        </form>

      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default TitleBar;

const Input = styled.input`
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: white;
}
::-moz-placeholder { /* Firefox 19+ */
  color: white;
}
:-ms-input-placeholder { /* IE 10+ */
  color: white;
}
:-moz-placeholder { /* Firefox 18- */
  color: white;
}
`;