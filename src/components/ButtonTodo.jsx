import React from "react";
import { Button } from "react-bootstrap";

function ButtonTodo({ clickedTodo }) {
  return (
    <div className="d-grid gap-2">
      <Button onClick={clickedTodo} variant="primary" style={{ width: "25rem", height: "3rem" }}>
        Todo
      </Button>
    </div>
  );
}

export default ButtonTodo;
