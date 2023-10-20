import React from "react";
import Banner from "../Banner/Banner";
import Thankful from "../Thankful/Thankful";
import Wearable from "../Wearable/Wearable";
import StartedSection from "./StartedSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Wearable></Wearable>
      <Thankful></Thankful>
      <StartedSection></StartedSection>
    </div>
  );
};

export default Home;
