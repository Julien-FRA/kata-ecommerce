import React from "react";
import { Hero } from "../components/Hero";
import { DiscoverContainer } from "../components/Container/Discover";
import { AboutContainer } from "../components/Container/About";

export const Home = () => {
  return (
    <>
      <Hero />
      <DiscoverContainer />
      <AboutContainer />
    </>
  );
};
