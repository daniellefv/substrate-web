import React from 'react';
import styled, { css } from 'styled-components';

export const AniTitleStyle = css`
  --gradient-color-1: #0aff91;
  --gradient-color-2: #08a387;
  --gradient-color-3: #5e19e4;
  --gradient-color-4: #972bb6;

  > div {
    > div {
      position: relative;
      margin-top: -0.5rem;

      h1 {
        margin: 0;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.8em;
        padding-right: 1rem;
        letter-spacing: 3px;
        color: #1f1e1e;
      }
      h1:nth-of-type(2) {
        position: absolute;
        top: 0;
        left: 0;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    :nth-child(1) {
      h1:nth-of-type(2) {
        background-image: linear-gradient(
          90deg,
          var(--gradient-color-1),
          var(--gradient-color-2)
        );
        animation: colorCycle1 8s infinite;
      }
    }

    :nth-child(2) {
      h1:nth-of-type(2) {
        background-image: linear-gradient(
          90deg,
          var(--gradient-color-2),
          var(--gradient-color-3)
        );
        animation: colorCycle2 8s infinite;
      }
    }

    :nth-child(3) {
      h1:nth-of-type(2) {
        background-image: linear-gradient(
          90deg,
          var(--gradient-color-3),
          var(--gradient-color-4)
        );
        animation: colorCycle3 8s infinite;
      }
    }
  }

  @media (max-width: 520px) {
    > div {
      > div {
        position: relative;
        margin-top: -1.2rem;

        h1 {
          font-size: 4rem;
          letter-spacing: -4px;
        }
      }
    }
  }

  @keyframes colorCycle1 {
    0%,
    16.667%,
    100% {
      opacity: 1;
    }

    33.333%,
    83.333% {
      opacity: 0;
    }
  }

  @keyframes colorCycle2 {
    0%,
    16.667%,
    66.667%,
    100% {
      opacity: 0;
    }

    33.333%,
    50% {
      opacity: 1;
    }
  }

  @keyframes colorCycle3 {
    0%,
    50%,
    100% {
      opacity: 0;
    }

    66.667%,
    83.333% {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  ${props => AniTitleStyle}
`;

export const AniTitle = ({ firstWord, secondWord, thirdWord }) => {
  return (
    <Wrapper>
      <div>
        <div>
          <h1>{firstWord}</h1>
          <h1>{firstWord}</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>{secondWord}</h1>
          <h1>{secondWord}</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>{thirdWord}</h1>
          <h1>{thirdWord}</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default AniTitle;
