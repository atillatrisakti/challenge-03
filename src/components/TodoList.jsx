import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import datas from "../data/data.json";
import ButtonAll from "./ButtonAll";
import ButtonDone from "./ButtonDone";
import ButtonTodo from "./ButtonTodo";
import ButtonEdit from "./ButtonUpdate/ButtonEdit";
import ButtonDelete from "./ButtonUpdate/ButtonDelete";
import ButtonDeleteDone from "./ButtonDeleteDone";
import ButtonDeleteAll from "./ButtonDeleteAll";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(datas);
  }, []);

  const sortAll = () => {
    setTodos(datas);
  };

  const sortDone = () => {
    const data = todos.filter((todo) => todo.complete === true);
    setTodos(data);
    console.log("Dasda");
  };

  const sortTodo = () => {
    const data = todos.filter((todo) => todo.complete === false);
    setTodos(data);
  };

  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  return (
    <>
      <div>
        <h1 className="text-center">TodoList</h1>
      </div>
      <Container>
        <Row className="mt-4">
          <Col md={4} className="d-flex justify-content-center">
            <ButtonAll
              clickedAll={() => {
                sortAll();
              }}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <ButtonDone
              clickedDone={() => {
                sortDone();
              }}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <ButtonTodo
              clickedTodo={() => {
                sortTodo();
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row className="mx-auto">
          <Col>
            {todos &&
              todos.map((data) => {
                return (
                  <div key={data.id}>
                    <Container className="square border rounded my-3 p-2">
                      <Row>
                        <Col>{data.task}</Col>
                        <Col className="d-flex justify-content-end">
                          <Stack direction="horizontal" gap={3}>
                            <ButtonEdit />
                            <ButtonDelete />
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
      <div>
        <Container className="mt-4 pb-5 d-flex justify-content-center">
          <Row>
            <Col>
              <ButtonDeleteDone
                clickedDeleteDone={() => {
                  deleteDoneTask();
                }}
              />
            </Col>
            <Col>
              <ButtonDeleteAll />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TodoList;
