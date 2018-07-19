import React, { Component } from "react";
import { Col, Container, Row, Button} from "reactstrap";

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
           userId: 10222,
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
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12" lg="9">
            <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
            <p>Badge Name</p>
            <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
            <h2> Heading </h2>
            <p>Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research & development market mass market innovator sales infrastructure.</p>
          </Col>
        </Row>
        
        {/* NEW CODE GOES BELOW */}
       
        <h1> Names </h1>
        {this.state.users.map(user => <p> Hello my name is { user.name } 🚀</p>)}
      
        <Form>
          <FormGroup>
          <Label>Username</Label>
            <Input type ="text" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Input type ="text" placeholder="password" />
          </FormGroup>
        </Form>

          

      </Container>
    );
  }
}

export default App;