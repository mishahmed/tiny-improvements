import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';


const backgroundStyle = {
  backgroundColor: "teal"
}

const cardMargin = {
  marginTop: "10px"
}


class App extends Component {
  state = {
    users: [],
    awards: [],
    sender: "",
    receiver: "",
    comment: "",
    title: "",
    filterUser: "",
    specialUsers: []
  }

  // Updated filter method to capture target value for filter user
  updateFilter = event => {
    this.setState({ filterUser: event.target.value });
  };

  // Creating SpecialUsers method with temp array to hold all the users that fit count of 5 + kudos 
  updateSpecialUsers = () => {
    let specialTempUsers = [];
    axios.get("/api/kudos")
      .then(response => {
        console.log(response.data)
        // Object variable called countObj to log the number of kudos assigned to each user 
        const data = response.data;
        var countObj = {};
        //Mapping each indivudal kudo, if the user name exists, increment by one indicated by ++
        //Otherwise create the username in that object and start count of 1 for first interation
        data.map(kudo => {
          if (countObj[kudo.receiver__r.Name]) {
            countObj[kudo.receiver__r.Name]++
          } else {
            countObj[kudo.receiver__r.Name] = 1;
          }
          // console.log(kudo.receiver__r)
        });
        //For each property on the countObj object it performs a comparison for a count of 3 kudos or greater
        //Once comparision complete, if 3 or greaters, pushed the property username to the specialTempUsers Array
        //Key refers to username, PUSH adds the key to end of the array
        for (var key in countObj) {
          if (countObj[key] >= 5) {
            specialTempUsers.push(key);
          }
          console.log(key)
        }
        this.setState({ specialUsers: specialTempUsers });
        //Temp array called awards, that maps through special users display only kudos on award card
        //If kudoes receiver name matches user than group and display 
        let awards = [];
        this.state.specialUsers.map(user => {
          data.map(kudo => {
            if (kudo.receiver__r.Name === user) {
              awards.push(kudo);
            }
          })
        });
        this.setState({ awards });
      })
  };




  updateSender = event => {
    this.setState({ sender: event.target.value });
  };

  updateTitle = event => {
    this.setState({ title: event.target.value });
  };

  updateReceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  postData = () => {
    if (this.state.title && this.state.comment && this.state.receiver && this.state.sender) {
      axios.post("/api/kudos", {
        Name: this.state.title,
        Comment__c: this.state.comment,
        Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
        Sender__c: this.state.users.find(user => user.name === this.state.sender).id
      }).then(response => {
        // this.setState({
        //   awards: response.data
        // })
      })
    }
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



  // Method to fetch data when button clicked from server
  getFilterData = () => {
    axios.get("/api/filter/" + this.state.filterUser)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

  // Method to fetch Mark's kudos when button clicked from server 
  //this.getFitlerData using method that has already being created
  getBopData = () => {
    this.getFilterData();
    this.setState({ filterUser: "Mark" });
  }


  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1><center>Big Time Progress</center></h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card style={backgroundStyle}>
              <CardBody className="mx-auto">

                {/* Filter button with dropdown form to call filter method */}
                <Form>
                  <FormGroup>
                    <Label>Filter Awards</Label>
                    <Input type="select" onChange={this.updateFilter}>
                      <option>Please select a filter!</option>
                      {this.state.users.map(elem => <option>{elem.name}</option>)}
                    </Input>
                    <Button onClick={this.getFilterData} style={cardMargin}>Filter</Button>
                  </FormGroup>
                </Form>

                {/* Filter button to retrieve SEs with more than 3 kudos */}
                <Form>
                  <FormGroup>
                    <Label>Retrieve Only Cool People</Label>
                    <Button onClick={this.updateSpecialUsers}>Retrieve</Button>
                  </FormGroup>
                </Form>
                {/* Filter button to retrieve kudos for Mark */}
                <Form>
                  <FormGroup>
                    <Label>Whats up with Mark?</Label>
                    <Button onClick={this.getBopData}>Bop Bop</Button>
                  </FormGroup>
                </Form>

              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              updateSender={this.updateSender}
              updateReceiver={this.updateReceiver}
              updateTitle={this.updateTitle}
              updateComment={this.updateComment}
              postData={this.postData}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;