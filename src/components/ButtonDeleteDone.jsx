import React from "react";
import { Button } from "react-bootstrap";

function ButtonDeleteDone({ clickedDeleteDone }) {
  return (
    <Button onClick={clickedDeleteDone} variant="danger" style={{ width: "25rem", height: "3rem" }}>
      Delete Done Tasks
    </Button>
  );
}

export default ButtonDeleteDone;
