import React from "react";

import Typewriter from "typewriter-effect";
export function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "Front End Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}