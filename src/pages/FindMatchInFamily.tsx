import React, { useState } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { FadeAnimation } from "../components/Animations/FadeAnimation";

export const FindMatchInFamily: React.FC = () => {
  const [found, setFound] = useState(false);

  const DonorArea = (
    <ClickableImages
      onClick={() => setFound(true)}
      width={80}
      height={230}
      style={{ left: 133, top: 50 }}
    />
  );

  const Family = (
    <ClickableImages
      width={300}
      height={283.25}
      imgs={[
        {
          src: "/assets/imgs/find-match-in-family/find-match.png",
          visibility: () => !found,
        },
        {
          src: "/assets/imgs/find-match-in-family/match-found.png",
          visibility: () => found,
        },
      ]}
    >
      {DonorArea}
    </ClickableImages>
  );

  const makeImageBox = (
    src: string,
    txt: string,
    width: number,
    height: number
  ) => (
    <div style={{ width, height }}>
      <div className="border text-center">{txt}</div>
      <div className="border text-center">
        <img src={src} alt="" draggable={false} />
      </div>
    </div>
  );

  const Patient = makeImageBox(
    "/assets/imgs/find-match-in-family/patient.png",
    "Patient",
    150,
    150
  );

  const Match = makeImageBox(
    "/assets/imgs/find-match-in-family/match.png",
    "Match Donor",
    150,
    150
  );

  const Hint = (
    <div style={{ height: 300 }}>
      <div className="p-4 text-xl text-center">
        Find the patient a match donor in her family
      </div>
      <div className="flex flex-row justify-around w-full">
        {Patient}
        {Match}
      </div>
    </div>
  );

  const Info = (
    <FadeAnimation
      className="card text-center flex flex-col justify-center"
      style={{ height: 300 }}
    >
      <p className="text-2xl my-2">YOU DID IT!</p>
      <p className="text-xl">
        Do you know...
        <br />
        For many patients, stem cell transplantation is their only hope. Only
        1/4 of them could find a match donor in their family.
      </p>
    </FadeAnimation>
  );

  return (
    <>
      <div className="flex flex-col justify-around items-center h-full w-full p-4">
        {Family}
        {found ? Info : Hint}
      </div>
    </>
  );
};
