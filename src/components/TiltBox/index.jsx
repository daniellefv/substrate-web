import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Tilt from 'react-tilt';

export const CardStyle = css`
  .layersContainer {
    width: 600px;
    height: 600px;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: all 0.5s;
    transform: perspective(1000px);
  }
  .layersContainer > div {
    backface-visibility: visible;
    -webkit-backface-visibility: visible;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    animation: fadeInUpTilt cubic-bezier(0.25, 0.27, 0.3, 1) 1s both;
  }
  .layersContainer > div:nth-child(4n + 1) {
    animation-delay: 0.2s;
  }
  .layersContainer > div:nth-child(3n + 4) {
    animation-delay: 0.4s;
  }
  .layersContainer > div:nth-child(4n + 4) {
    animation-delay: 0.7s;
  }
  .layersContainer > .layer2,
  .layersContainer > .layer3,
  .layersContainer > .layer4 {
    animation-delay: 0.8s;
  }

  .layer1 {
    transform: translateZ(0px);
  }
  .layer2 {
    transform: translateZ(20px);
  }
  .layer3 {
    transform: translateZ(30px);
  }
  .layer4 {
    transform: translateZ(40px);
  }
  .layer5 {
    transform: translateZ(50px);
  }
  .layer6 {
    transform: translateZ(60px);
  }

  @keyframes fadeInUpTilt {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 1350px) {
    .layersContainer {
      width: 350px;
      height: 350px;
    }
  }

  @media (max-width: 780px) {
    .layersContainer {
      width: 250px;
      height: 250px;
    }
  }
`;

const Wrapper = styled.div`
  ${props => CardStyle}
`;

const TiltBox = ({ layersSrc }) => {
  return (
    <Wrapper>
      <Tilt options={{ max: 65 }} className="layersContainer">
        {layersSrc.map((layerSrc, index) => (
          <div key={`${layerSrc}_${index}`} className={`layer${index + 1}`}>
            <Image src={layerSrc} width={600} height={600} />
          </div>
        ))}
      </Tilt>
    </Wrapper>
  );
};

export default TiltBox;
