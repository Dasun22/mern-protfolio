import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#1589559c] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((courses, index) => (
            <div
              key={index}
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 "
                    : "text-white"
                }`}
              >
                {courses.title}
              </h1>
            </div>
          ))}
        </div>
        

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {courses[selectedItemIndex].title}
          </h1>
          <p className="text-white">
            My journey with Udemy has been incredibly rewarding. As an avid
            learner and tech enthusiast, I found Udemy to be a treasure trove of
            knowledge across various domains. The platform offers a vast array
            of courses, from web development and programming to design and
            personal development.
          </p>
        </div>
        <img src= {courses[selectedItemIndex].image} alt="" className="h-52 w-80"/>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Courses;
