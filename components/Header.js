import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <div id="nav">
      <h1>
        <Link href="/">Shashank.dev</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Projects">Projects</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default header;
