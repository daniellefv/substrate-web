import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import baseTheme from 'styles/theme';
import { blurCard } from 'assets/images';

export const CardStyle = css`
  display: flex;
  width: 21rem;
  height: 21rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  margin: 1.8rem;
  transition: all 0.2s ease-out;
  border-radius: 100%;
  background-image: url(${blurCard});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2),
    inset 0px 1px 2px rgba(255, 255, 255, 0.8),
    inset 0px 20px 40px rgba(255, 255, 255, 0.25),
    inset 0px -4px 4px rgba(255, 255, 255, 0.25), inset 0px -40px 40px #101010,
    inset 0px 4px 12px rgba(255, 255, 255, 0.4);

  h2 {
    font-size: ${baseTheme.font_md_2};
    margin: 0;
  }
  p {
    opacity: 0.7;
    font-size: ${baseTheme.font_sm_1};
    width: 12rem;
  }

  :hover {
    border: 2px solid
      linear-gradient(
        136.87deg,
        rgba(87, 255, 178, 0.7) 29.32%,
        rgba(94, 25, 228, 0.7) 61.12%,
        rgba(124, 17, 153, 0.287) 94.22%
      );
    box-shadow: ${baseTheme.shadow_card};
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  ${props => CardStyle}
`;

const Card = ({ title, text, icon, alt }) => {
  return (
    <Wrapper>
      {icon && (
        <div>
          <Image
            className="svgIcon"
            src={icon}
            href="/"
            alt={alt}
            width={100}
            height={100}
          />
        </div>
      )}
      <div>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Card;
