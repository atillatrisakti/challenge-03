import React from "react";
import { Button } from "react-bootstrap";

function ButtonDeleteAll({ clickedDeleteAll }) {
  return (
    <Button onClick={clickedDeleteAll} variant="danger" style={{ width: "25rem", height: "3rem" }}>
      Delete All Tasks
    </Button>
  );
}

export default ButtonDeleteAll;
