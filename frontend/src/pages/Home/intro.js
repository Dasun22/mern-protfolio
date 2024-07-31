import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 px-5">
      <h1 className="text-white">Hi , I am </h1>
      <h1 className="text-7xl sm:text-5xl text-secondary font-semibold">
        Dasun Nethsaran Thebuwana
      </h1>
      <h1 className="text-7xl sm:text-5xl text-white font-semibold">
        I build things for the web.
      </h1>
      <p className="text-white w-2/3 sm:w-full">
        I am Fullstack Web Developer. Currently i am working as a front end
        react Developer in Sri Lanka. Also sharing my knowledge to the student
        that i have gained in my carrier through online teaching across the
        world
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
  );
}

export default Intro;

