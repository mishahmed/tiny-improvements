import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from "./component/AwardCard";

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
      ],

      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
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

            {this.state.awards.map(e => <p>{<AwardCard title={e.title} comment={e.comment}/>}</p>)}

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
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Kudos text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;