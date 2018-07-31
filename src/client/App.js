import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';

class App extends Component {
  state = {
    users: [],
    awards: [],
    kudosText: "",
    kudosTitle: "",
    sender: "",
    receiver: ""
  }

  updateKudosText = event => {
    this.setState({ kudosText: event.target.value });
  }

  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value });
  }

  updateReceiver = event => {
    this.setState({ receiver: event.target.value });
  }

  updateSender = event => {
    this.setState({ sender: event.target.value });
  }



  postData = () => {
    axios.post("/api/kudos", {
      text: this.state.kudosText,
      title: this.state.kudosTitle,
      sender: this.state.sender,
      receiver: this.state.receiver,
    })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })
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
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} text={award.text} />)}
          </Col>
        </Row>

        {/* // <Row>
        //   <Col md="12" lg="3">
        //     <Card>
        //       <CardBody className="mx-auto">
        //         <Button color="success">Submit</Button>
        //       </CardBody>
        //     </Card>
        //   </Col>
        //   <Col md="12" lg="9">
        //     {this.state.awards.map(elem => <AwardCard title={elem.title} text={elem.comment__c} />)}
        //   </Col>
        // </Row> */}

        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              postData={this.postData}
              kudosText={this.state.kudosText}
              kudosTitle={this.state.kudosTitle}
              updateKudosText={this.updateKudosText}
              updateKudosTitle={this.updateKudosTitle}
              updateReceiver={this.updateReceiver}
              updateSender={this.updateSender}
              receiver={this.state.users.map(user => <option> {user.name} </option>)}
              sender={this.state.users.map(user => <option> {user.name} </option>)}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;