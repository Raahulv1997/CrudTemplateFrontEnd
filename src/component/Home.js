import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import AddStudent from "../comman/AddStudent";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Row>
          <Col className="bg-dark mt-4 text-white text-center p-5">
            <h1 className=" fs-1">Student Management record</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <Button className="btn btn-primary mt-3 " onClick={handleShow}>
              Add Student
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            {" "}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>jjj</td>
                  <td>sddd</td>
                  <td>ddd</td>
                  <td>
                    <Row>
                      {" "}
                      <Col>
                        {" "}
                        <Button className="bg-dark">
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                      </Col>
                      <Col>
                        {" "}
                        <Button className="bg-success">
                          {" "}
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                      </Col>
                      <Col>
                        {" "}
                        <Button className="bg-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddStudent show={show} setShow={setShow} />
    </div>
  );
};

export default Home;
