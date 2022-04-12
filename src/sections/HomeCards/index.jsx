import React from 'react';
import styled from 'styled-components';
import { Card } from 'components';
import ScrollAnimation from 'react-animate-on-scroll';
import { seedsIcon, plantsIcon, treesIcon, waves } from 'assets/images';

const SectionWrapper = styled.section`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-top: 2.6rem;
`;

const TitleWrapper = styled.div`
  min-width: 250px;
  max-width: 450px;
  padding-top: 2rem;
  text-align: start;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HomeCards = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>
        <h2>You can grow your own:</h2>
      </TitleWrapper>
      <CardWrapper>
        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce>
          <Card
            icon={seedsIcon}
            title="SEEDS"
            text="are little chunks of starting knowledge. It doesn’t need to be perfect, it’s just a starting point!"
            alt="seeds icon"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
          <Card
            icon={plantsIcon}
            title="PLANTS"
            text="are connected chunks of knowledge about a subject - you can think of a small article."
            alt="plants icon"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce>
          <Card
            icon={treesIcon}
            title="TREES"
            text="are pieces that had grown and are robust enough - you can always keep them growing."
            alt="trees icon"
          />
        </ScrollAnimation>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default HomeCards;
