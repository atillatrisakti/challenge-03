import React from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#2462d6" }} />
                    <Form.Control type="text" placeholder="Search Todo"></Form.Control>
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

      <div className="mt-3">
        <TodoList />
      </div>

      <div>
        <Container className="mt-4 pb-5 d-flex justify-content-center">
          <Row>
            <Col>
              <Button variant="danger" style={{ width: "25rem", height: "3rem" }}>
                Delete Done Tasks
              </Button>
            </Col>
            <Col>
              <Button variant="danger" style={{ width: "25rem", height: "3rem" }}>
                Delete All Tasks
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
