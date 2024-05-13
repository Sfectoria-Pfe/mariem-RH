import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function AddJobOffre() {
  const [validated, setValidated] = useState(false);
  const [jobOffre, setJobOffre] = useState({
    title: "",
    description: "",
    type: "offre d'emploi",
  });
const navigate = useNavigate
  const handleChange = (e) => {
    setJobOffre({ ...jobOffre, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const response = await axios.post(
      "http://localhost:4000/job-offers",
      jobOffre
    );
  
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Desciption</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Desciption"
            name="description"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}
