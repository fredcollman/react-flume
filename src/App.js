// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";

const TitleSlide = ({ title, subtitle }) => (
  <article className="width-m height-m bg-subtle">
    <div className="cover height-full">
      <div className="center">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  </article>
);

const App = () => (
  <main>
    <TitleSlide title="Title Slide" subtitle="by Sub Title" />
  </main>
);

export default hot(App);
