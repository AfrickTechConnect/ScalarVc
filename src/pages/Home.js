import React from "react";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Newsletter,
} from "../components/HomePage";

function HomePage(props) {
  return (
    <div className="mt-28">
      <SectionOne />
      <div className="mt-24 mb-10 flex justify-center text-2xl font-semibold">
        <h1 className="md:text-3xl">Why Scalar VC</h1>
      </div>
      <SectionTwo />
      <SectionThree />
      <div className="mt-16 mb-10 flex justify-center text-2xl font-semibold">
        <h1 className="md:text-3xl">What we offer</h1>
      </div>
      <SectionFour />
      <Newsletter />
    </div>
  );
}

export default HomePage;
