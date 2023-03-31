import React from "react";
import { Button } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";

function Checklist({ onclick, check }) {
  return (
    <Button variant="outline-success" size="sm" onClick={onclick}>
      <FaRegCheckCircle />
    </Button>
  );
}

export default Checklist;
