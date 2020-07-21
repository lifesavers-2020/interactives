import React, { useState } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { Scrollable } from "../components/Interactions/Scrollable";
import { Layout } from "../Layout/Layout";
import { useOnResize } from "../components/Share/UseOnResize";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { PopAnimation } from "../components/Animations/PopAnimation";

export const FindMatchInCrowd: React.FC = () => {
  const bgWidth = 1000;
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
          style={{ left: 614, top: 28 }}
        />
        {found && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 579, top: 157 }}
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
          style={{ left: 292, top: -114 }}
        />
        {foundOld && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 253, top: 100 }}
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
          style={{ left: 205, top: -159 }}
        />
        {foundDiffEthnic && (
          <PopAnimation
            className="absolute card bg-white text-center"
            style={{ width: 150, left: 172, top: 200 }}
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
      dragConstraints={{ right: 0, left: dragLeft - 32 }}
    >
      <div style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ClickableImages
          width={bgWidth}
          height={338.2}
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
    <Layout>
      {Crowd}
      {Hint}
    </Layout>
  );
};
