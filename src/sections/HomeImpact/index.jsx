import React from 'react';
import styled, { css } from 'styled-components';
import { AniNumber } from 'components';
import baseTheme from 'styles/theme';

export const SectionStyle = css`
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  span {
    color: ${baseTheme.color_tertiary};
    font-weight: 800;
    font-size: 4rem;
  }

  .titleBox {
    max-width: 500px;
  }

  .cardsBox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2.4rem;
  }

  @media screen and (max-width: 1210px) {
    .cardsBox {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 780px) {
    .cardsBox {
      flex-direction: column;
    }
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

const CardWrapper = styled.div`
  max-width: 200px;
  flex-direction: column;
  margin: 2rem;
`;

export const HomeImpact = () => {
  return (
    <Wrapper>
      <div className="cardsBox">
        <CardWrapper>
          <AniNumber start={100} end={3} duration={2} suffix="min." />
          <p>to create your own garden</p>
        </CardWrapper>
        <CardWrapper>
          <AniNumber start={100} end={0} duration={2.2} prefix="$" />
          <p>It's free!</p>
        </CardWrapper>
        <CardWrapper>
          <AniNumber end={100} duration={2.2} suffix="%" />
          <p>Focused to help you keep learning!</p>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default HomeImpact;
