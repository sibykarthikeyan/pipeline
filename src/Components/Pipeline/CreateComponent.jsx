import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function App() {
  return (
    <div className="mb-4 align-middle" style={{display: 'block', width: 1300, 
                  padding: 80}}>
      <h4>Creating Java-Maven Pipeline</h4>
      <Form>
      <br/>
      <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>LOB</Form.Label>
          <Col sm={10}>
          <Form.Select aria-label="lob">
                <option>Choose LOB</option>
                <option value="Claim">Claim</option>
                <option value="PI">PI</option>
                <option value="BI">BI</option>
          </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Value Stream/Portfolio</Form.Label>
          <Col sm={10}>
          <Form.Select>
                <option>Choose Value Stream/Portfolio</option>
                <option value="TVS">TVS</option>
                <option value="PVS">PVS</option>
                <option value="VS">VS</option>
          </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Controller</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose the Controller</option>
                <option value="ctrl1">ctrl1</option>
                <option value="ctrl2">ctrl2</option>
                <option value="VS">ctrl3</option>
          </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Application</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose Application ID</option>
                <option value="1">123</option>
                <option value="2">234</option>
                <option value="4">345</option>
          </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>UCD Deployment Process</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose Deployment Process</option>
                <option value="1">123</option>
                <option value="2">234</option>
                <option value="4">345</option>
          </Form.Select>
 </Col>
        </Form.Group>
<br/>           
        <Button variant="secondary">Back</Button>{' '}
        <Button variant="primary">Next</Button>
        
      </Form>
    </div>
  );
}