import React from "react";
import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";

function ButtonEdit() {
  return (
    <Button variant="outline-primary" size="sm">
      <FaPencilAlt />
    </Button>
  );
}

export default ButtonEdit;
