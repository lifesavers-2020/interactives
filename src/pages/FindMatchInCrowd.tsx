import React, { useState } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { Scrollable } from "../components/Interactions/Scrollable";
import { NextStepButton } from "../components/Share/NextStepButton";
import { VContainer } from "../Layout/VContainer";
import { useOnResize } from "../components/Share/UseOnResize";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { PopAnimation } from "../components/Animations/PopAnimation";

export const FindMatchInCrowd: React.FC = () => {
  const bgWidth = 1300;
  const [dragLeft, setDragLeft] = useState(window.innerWidth - bgWidth);
  const [found, setFound] = useState(false);
  const [foundOld, setFoundOld] = useState(false);
  const [foundDiffEthnic, setFoundDiffEthnic] = useState(false);

  useOnResize(() => setDragLeft(window.innerWidth - bgWidth), 200);

  const DonorAreas = (
    <>
      <div>
        <ClickableImages
          onClick={() => setFound(true)}
          width={80}
          height={120}
          style={{ left: 810, top: 30 }}
        />
        {found && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 775, top: 157 }}
          >
            You found a matching donor
          </PopAnimation>
        )}
      </div>
      <div>
        <ClickableImages
          onClick={() => setFoundOld(true)}
          width={80}
          height={120}
          style={{ left: 392, top: -114 }}
        />
        {foundOld && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 353, top: 150 }}
          >
            The donor has to be 18-35 years old
          </PopAnimation>
        )}
      </div>
      <div>
        <ClickableImages
          onClick={() => setFoundDiffEthnic(true)}
          width={80}
          height={120}
          style={{ left: 281, top: -114 }}
        />
        {foundDiffEthnic && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 248, top: 262 }}
          >
            Match rate is higher within the same ethnic group
          </PopAnimation>
        )}
      </div>
    </>
  );

  const Crowd = (
    <Scrollable
      drag="x"
      imageWidth={bgWidth}
      dragConstraints={{ right: 0, left: dragLeft }}
    >
      <div className="p-4">
        <ClickableImages
          width={bgWidth}
          height={428.84}
          imgs={[{ src: "/assets/imgs/find-match-in-crowd/crowd.png" }]}
        >
          <div className="absolute">{DonorAreas}</div>
        </ClickableImages>
      </div>
    </Scrollable>
  );

  const makeBox = (
    children: React.ReactNode,
    text: string,
    width: number,
    height: number
  ) => (
    <div style={{ width, height }}>
      <div className="border text-center">{text}</div>
      <div className="border">{children}</div>
    </div>
  );

  const Patient = makeBox(
    <div>
      {found ? (
        <FadeAnimation>
          <img
            src="/assets/imgs/find-match-in-crowd/patient-2.png"
            alt="patient"
            draggable={false}
          />
        </FadeAnimation>
      ) : (
        <img
          src="/assets/imgs/find-match-in-crowd/patient-1.png"
          alt="patient"
          draggable={false}
        />
      )}
      <div className="text-center">{`{Patient Name}`}</div>
    </div>,
    "Patient",
    150,
    150
  );

  const donors = [
    {
      src: "/assets/imgs/find-match-in-crowd/d1.png",
      name: "Thomas",
      age: 46,
    },
    {
      src: "/assets/imgs/find-match-in-crowd/d2.png",
      name: "Sally",
      age: 18,
    },
    {
      src: "/assets/imgs/find-match-in-crowd/d3.png",
      name: "Bill",
      age: 25,
    },
  ];

  const PotentialDonors = makeBox(
    <Scrollable
      drag="x"
      imageWidth={450}
      containerWidth={150}
      dragConstraints={{ right: 0, left: -300 }}
    >
      <div className="flex flex-row">
        {donors.map(({ src, name, age }) => (
          <div key={src} style={{ width: 150 }}>
            <img src={src} alt="" draggable={false} />
            <div className="text-center">
              {name}: {age} yrs old
            </div>
          </div>
        ))}
      </div>
    </Scrollable>,
    "Potiential Donors",
    150,
    150
  );

  const Hint = (
    <div className="w-full" style={{ height: 300 }}>
      <div className="p-4 text-xl text-center">
        Find the patient a match donor
      </div>
      <div className="flex flex-row justify-around w-full">
        {Patient}
        {PotentialDonors}
      </div>
    </div>
  );

  return (
    <VContainer>
      {Crowd}
      {Hint}
      <NextStepButton to="/more-collectable-stem-cells-in-male" />
    </VContainer>
  );
};
