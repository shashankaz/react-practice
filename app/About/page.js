import React from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "About",
  description: "",
};

const page = () => {
  return (
    <div id="container">
      <Header />
      <div id="about">
        <h1>About</h1>
      </div>
    </div>
  );
};

export default page;
