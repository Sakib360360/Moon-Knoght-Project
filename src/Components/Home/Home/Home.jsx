import React from "react";
import Banner from "../Banner/Banner";
import Thankful from "../Thankful/Thankful";
import Wearable from "../Wearable/Wearable";
import StartedSection from "./StartedSection";
import AdvisoryBoard from "./AdvisoryBoard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Wearable></Wearable>
      <StartedSection></StartedSection>
      <AdvisoryBoard></AdvisoryBoard>
      <Thankful></Thankful>
     
    </div>
  );
};

export default Home;
