import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import datas from "../data/data.json";
function TodoList() {
  return (
    <>
      <div>
        <h1 className="text-center">TodoList</h1>
      </div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={4}>
            <Button variant="primary" className="mt-3 " style={{ width: "25rem", height: "3rem" }}>
              All
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" className="mt-3 " style={{ width: "25rem", height: "3rem" }}>
              Done
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" className="mt-3 " style={{ width: "25rem", height: "3rem" }}>
              Todo
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        {datas &&
          datas.map((data) => {
            return (
              <div key={data.id}>
                <ListGroup className="mt-3">
                  <ListGroup.Item className="py-3">
                    <strong>{data.task}</strong>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            );
          })}
      </Container>
    </>
  );
}

export default TodoList;
