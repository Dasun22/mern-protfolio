import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = ["JavaScript", "HTML", "CSS", "React", "Node", "MongoDB"];

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/2cc25cea-1443-43e3-9588-0106bcffacc7/lLBGRiALv1.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello! My name is Dasun Nethsara. I enjoy creating things that live
            on the internet. My interest in web development started back in 2019
            when I decided to try editing custom Tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-white">
            I have completed HNDIT in Dehiwala SLIATE. I am 23 years old. fasd
            ajabfafh aghgfhkj gahg hghfada ghghag hghjgjz hghf hhagf hgjhagdf
            fghfc jfhjcfh fyjadgf yg ya yafyyg ygsyd ygyaf yghghd ghghfa
            ygyfgfshg hghsvfhj ysgfygys ysgyfgy ygsyf y sgfyggygsf
            YGDYFIGhudgsgf
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
