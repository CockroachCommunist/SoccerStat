import React from "react";
import { Competition } from "./components";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Competition />} />
        <Route path="/match" />
      </Routes>
    </>
  );
};

export default Content;
