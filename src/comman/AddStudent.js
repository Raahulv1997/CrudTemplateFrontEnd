import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddStudent = ({ show, setShow }) => {
  const intialFormState = {
    name: "",
    email: "",
    age: "",
    mobile: "",
    profileImage: "",
  };
  const [addUser, setAddUser] = useState(intialFormState);

  const InputHeandller = (evt) => {
    const value = evt.target.value;
    setAddUser({ ...addUser, [evt.target.name]: value });
  };
  const handleClose = () => setShow(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("state--" + JSON.stringify(addUser));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={SubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={InputHeandller}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={InputHeandller}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                name="age"
                onChange={InputHeandller}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile"
                name="mobile"
                onChange={InputHeandller}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter Mobile"
                name="profileImage"
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddStudent;
