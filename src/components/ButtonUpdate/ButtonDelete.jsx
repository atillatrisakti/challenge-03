import React from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function ButtonDelete() {
  return (
    <Button variant="danger" size="sm">
      <FaTrashAlt />
    </Button>
  );
}

export default ButtonDelete;
