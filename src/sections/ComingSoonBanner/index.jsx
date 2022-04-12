import React from 'react';
import styled, { css } from 'styled-components';
import { ImageBox } from 'components';
import Image from 'next/image';
import { trees } from 'assets/images';

export const SectionStyle = css`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
  margin: 8rem 0 4rem 0;
  flex-wrap: wrap;
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

export const NotFoundBanner = () => {
  return (
    <Wrapper>
      <div>
        <h1>Coming Soon!</h1>
        <h3>The digital garden portal is under construction...</h3>
      </div>
      <div>
        <ImageBox float>
          <Image
            src={trees}
            href="/"
            alt="trees floating"
            width={500}
            height={500}
          />
        </ImageBox>
      </div>
    </Wrapper>
  );
};

export default NotFoundBanner;
