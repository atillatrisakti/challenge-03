import React from "react";
import { Button } from "react-bootstrap";

function ButtonDone({ clickedDone }) {
  return (
    <div className="d-grid gap-2">
      <Button onClick={clickedDone} variant="primary" style={{ width: "25rem", height: "3rem" }}>
        Done
      </Button>
    </div>
  );
}

export default ButtonDone;
