import React from 'react';
import {
  HomeBanner,
  HomeCards,
  HomeProducts,
  HomeBenefits,
  HomeImpact,
} from 'sections';

export default function Home() {
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeProducts />
      <HomeCards />
      <HomeBenefits />
      <HomeImpact />
    </React.Fragment>
  );
}
