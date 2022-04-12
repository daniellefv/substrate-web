import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'components';
import { AniTitle, TiltBox, ImageBox } from 'components';
import ScrollAnimation from 'react-animate-on-scroll';
import { layer1, layer2, layer3, layer4, layer5, layer6 } from 'assets/images';

export const SectionStyle = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  button {
    margin: 1.8rem 1rem 0 0;
  }

  span {
    font-weight: 700;
  }

  .buttonsBox {
    display: flex;
    flex-direction: row;
  }

  .titleBox {
    max-width: 900px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: center;

    .buttonsBox {
      flex-direction: column;
      max-width: 200px;
    }
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

export const HomeBanner = () => {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
        <div className="titleBox">
          <h1>
            Build your amazing <br />
            digital garden
          </h1>
          <AniTitle
            firstWord="SHARE YOUR LEARNING JOURNEY."
            secondWord="START LITTLE - AND EASY."
            thirdWord="ENJOY THE PROCESS."
          />
          <div className="buttonsBox">
            <Button className="outline" link="/">
              Start now
            </Button>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={1} animateOnce>
        <ImageBox float fullSize>
          <TiltBox
            layersSrc={[layer4, layer6, layer5, layer3, layer2, layer1]}
          ></TiltBox>
        </ImageBox>
      </ScrollAnimation>
    </Wrapper>
  );
};

export default HomeBanner;
