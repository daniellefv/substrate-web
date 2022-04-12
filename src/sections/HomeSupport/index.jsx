import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';
import { SeparatorLine, ArrowLink } from 'components';

export const SectionStyle = css`
  height: 50vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${baseTheme.color_quaternary};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 2.5rem;

  button {
    margin: 1rem 1rem 0 0;
  }

  .buttonsBox {
    display: flex;
    flex-direction: row;
  }

  .titleBox,
  .textBox {
    max-width: 550px;
    margin: 1rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .textBox {
      margin: 1rem;
    }

    svg {
      max-width: 70%;
    }

    .buttonsBox {
      flex-direction: column;
    }
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

export const HomeSupport = () => {
  return (
    <Wrapper>
      <div className="titleBox">
        <h2>Title</h2>
        <SeparatorLine light />
        <p>Subtitle</p>
        <div className="buttonsBox">
          <ArrowLink light href="/contact">
            Link
          </ArrowLink>
        </div>
      </div>
      <div className="textBox">
        <p>Description</p>
      </div>
    </Wrapper>
  );
};

export default HomeSupport;
