import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ clickedAll }) {
  return (
    <div className="d-grid gap-2">
      <Button onClick={clickedAll} variant="primary" style={{ width: "25rem", height: "3rem" }}>
        All
      </Button>
    </div>
  );
}

export default ButtonAll;
