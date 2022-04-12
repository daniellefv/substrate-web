import React from 'react';
import styled, { css } from 'styled-components';
import { growingSeeds } from 'assets/images';
import { ImageBox } from 'components';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';

export const SectionStyle = css`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 0;
  flex-wrap: wrap-reverse;

  span {
    letter-spacing: 0.2rem;
    opacity: 0.7;
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

const DescriptionWrapper = styled.div`
  padding: 2rem;
  margin: 0 1rem;
  max-width: 500px;
  align-items: left;
  text-align: left;
`;

export const HomeProducts = () => {
  return (
    <Element name="our_products" className="our_products">
      <Wrapper id="productsSection">
        <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
          <ImageBox>
            <Image
              className="svg-icon"
              src={growingSeeds}
              href="/"
              alt="seed growing into a plant"
              width={450}
              height={450}
            />
          </ImageBox>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce>
          <DescriptionWrapper>
            <p>
              <span>LEARN IN PUBLIC</span>
            </p>
            <h2>Ready to create your own career opportunities?</h2>
            <ul>
              <li>Accelerate your learning curve.</li>
              <br />
              <li>Share your interests and your growth over time.</li>
              <br />
              <li>Leave your digital traces.</li>
              <br />
              <li>Contribute and receive feedback.</li>
              <br />
              <li>
                Have fun while you keep on track all the interesting things that
                you learn!
              </li>
            </ul>
          </DescriptionWrapper>
        </ScrollAnimation>
      </Wrapper>
    </Element>
  );
};

export default HomeProducts;
