import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
           name: "Alia",
           userId: 10457,
           position: "Solutions Engineer"
         },
         {
           name: "Cody",
           userId: 10850,
           position: "Senior Functional Consultant"
         },
         {
          name: "Ana",
          userId: 32481,
          position: "Lead Solutions Engineer"
        },
         {
           name: "Leon",
           userId: "02481",
           position: "Lead Solutions Engineer"
         }
       ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            <Card>
              <CardBody className="mx-auto">
                <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
                <p>Badge Name</p>
                <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
                <h2> Heading </h2>
                <p>Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research & development market mass market innovator sales infrastructure.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form>

              <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select">
              
                  {this.state.users.map(user => <option>({user.userId}) {user.name} {user.position}</option>)}
                  <option>{this.state.users.length}</option>
              
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text"  placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea"  placeholder="Kudos text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;