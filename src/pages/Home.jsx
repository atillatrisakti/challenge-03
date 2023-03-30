import React from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="mt-3">TodoSearch</h1>
      </div>
      <Container className="square border rounded p-4">
        <Row>
          <Col md={5}>
            <Container>
              <div>
                <span>
                  <Form>
                    <InputGroup className="mb-2">
                      <InputGroup.Text id="basic-addon1">
                        <Search />
                      </InputGroup.Text>
                      <Form.Control placeholder="Search Todo" aria-label="Username" aria-describedby="basic-addon1" />
                    </InputGroup>
                  </Form>
                </span>
              </div>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <Container>
              <Button variant="primary" className="mt-3" style={{ width: "492px" }}>
                Search
              </Button>
            </Container>
          </Col>
          <Col md={5}>
            <Button variant="primary" className="mt-3 " style={{ width: "20rem" }} as={Link} to={"/todo-input"}>
              Add New Task
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className=" mt-5 square border rounded">
        <div className="mt-3">
          <TodoList />
        </div>
      </Container>
    </>
  );
}

export default Home;
