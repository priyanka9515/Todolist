import React, { Component } from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center "></div>
      <h1>
        {name}
        {title}
      </h1>
    </div>
  );
}
