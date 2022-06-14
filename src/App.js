import React from "react";
import "./App.css";

const header = {
  boilerplate: "Boilerplate - add CSS by style-loader",
  desc: "Boilerplate - add CSS by css-loader",
};

export default function App() {
  return (
    <>
      <h1 className='style-loader' style={{ color: "green" }}>
        {header.boilerplate}
      </h1>
      <h1 className='css-loader'>{header.desc}</h1>
    </>
  );
}
