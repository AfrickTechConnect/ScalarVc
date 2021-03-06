import React from "react";
import { Banner, SectionOne, SectionTwo } from "../components/JoinUsPage";

function JoinPage(props) {
  return (
    <div className="mt-16">
      <Banner />

      <div className="space-y-32 md:space-y-0 mt-20 flex flex-col md:flex-row md:justify-around items-center mx-10 mb-28">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
}

export default JoinPage;
