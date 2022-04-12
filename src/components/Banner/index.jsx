import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';
import { Button } from '..';

export const SectionStyle = css`
  height: 100%;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${baseTheme.color_gradient_primary};
  color: ${baseTheme.color_quaternary};
  padding: 5rem;
  background-size: 400% 400%;
  -webkit-animation: bgTransition 4s ease infinite;
  -moz-animation: bgTransition 4s ease infinite;
  animation: bgTransition 4s ease infinite;

  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .titleBox {
    max-width: 650px;
  }

  @-webkit-keyframes bgTransition {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }
  @-moz-keyframes bgTransition {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }
  @keyframes bgTransition {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

export const Banner = ({ title, subtitle, buttonLabel, link }) => {
  return (
    <Wrapper>
      <div className="titleBox">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Button className="white" link={link}>
          {buttonLabel}
        </Button>
      </div>
    </Wrapper>
  );
};

export default Banner;
