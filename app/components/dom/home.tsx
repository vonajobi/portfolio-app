"use client"
import { HomepageOverlay } from './homeIndex';
import React from 'react';
import dynamic from 'next/dynamic';

const SceneIndex = dynamic(() => import('../canvas/scene'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HomepageOverlay />
    </>
  );
};

HomePage.r3f = () => (
  <SceneIndex />
);

export default HomePage;
