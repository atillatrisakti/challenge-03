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
import Checklist from "./ButtonUpdate/Checklist";

function TodoList({ search }) {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    setTodos(datas);
  }, []);

  const sortAll = () => {
    setType("");
  };

  const sortDone = () => {
    setType("sortDone");
  };

  const sortTodo = () => {
    setType("sortTodo");
  };

  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  const deleteAllTask = () => {
    setTodos([]);
  };

  const updateList = (type, id) => {
    if (type === "done") {
      let check = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      setTodos(check);
    }
    if (type === "delete") {
      let del = todos.filter((todo) => todo.id !== id);
      setTodos(del);
    }
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
              type === "sortTodo" &&
              !search &&
              todos
                .filter((todo) => todo.complete === false)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete onclick={() => updateList("delete", data.id)} />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              type === "" &&
              !search &&
              todos.map((data) => {
                return (
                  <div key={data.id}>
                    <Container className="square border rounded my-3 p-2">
                      <Row>
                        <Col>
                          <p className={data.complete ? "complete" : null}>{data.task}</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <Stack direction="horizontal" gap={3}>
                            <Checklist onclick={() => updateList("done", data.id)} />
                            <ButtonEdit />
                            <ButtonDelete onclick={() => updateList("delete", data.id)} />
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              })}
            {todos &&
              type === "sortDone" &&
              !search &&
              todos
                .filter((todo) => todo.complete === true)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete onclick={() => updateList("delete", data.id)} />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              search &&
              todos
                .filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()))
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete onclick={() => updateList("delete", data.id)} />
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
              <ButtonDeleteAll
                clickedDeleteAll={() => {
                  deleteAllTask();
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TodoList;
