import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import html from "../public/html.svg";
import css from "../public/css.svg";
import js from "../public/js.svg";
import react from "../public/react.svg";
import shape from "../public/shape.svg";
import boy from "../public/boy-png-29775.png";

const page = () => {
  return (
    <div>
      <div id="container">
        <Header />
        <div id="main">
          <div id="intro">
            <h1>
              Front-End React <br />
              Developer 👋
            </h1>
            <p>
              Hi, I'm Shashank. A passionate Front-end React Developer based in
              Patna, Bihar.📍
            </p>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <Image src={linkedin} alt="" />
            </a>
            <a href="https://github.com/" target="_blank">
              <Image src={github} alt="" />
            </a>
          </div>
          <div id="logo">
            <Image src={shape} alt="" className="cover" />
            <Image src={boy} alt="" className="layer" />
          </div>
        </div>
        <div id="stack">
          <h3>Tech Stack &nbsp;&nbsp;&nbsp;|</h3>
          <Image src={html} alt="" />
          <Image src={css} alt="" />
          <Image src={js} alt="" />
          <Image src={react} alt="" />
          <Image src={css} alt="" />
          <Image src={html} alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
