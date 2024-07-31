import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Dasun Nethsara Thebuwana",
    age: null,
    gender: "Male",
    email: "dasunnethsara2000@gmail.com",
    mobile: "0775378296",
    country: "Sri Lanka",
  };
  return (
    <div>
      <SectionTitle title="Say Hallo" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"} </p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-white">{"}"} </p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/aa8ddd4c-f888-4399-8f83-fbeab2362cd7/kaBVkCJGgL.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
