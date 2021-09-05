import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <Spinner animation="grow" size="sm" variant="info"/>
    <Spinner animation="grow" variant="primary"/>
    <Spinner animation="grow" size="sm" variant="info"/>
  </div>
);

export default Loading;
