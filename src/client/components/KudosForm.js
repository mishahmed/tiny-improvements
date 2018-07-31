import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const KudosForm = props => (
  <Form>
    <FormGroup>
      <Label>Give Kudos to</Label>
      <Input type="select"
        onChange={props.updateReceiver}>
        value={props.receiver}
      </Input>
    </FormGroup>
    <FormGroup>
      <Input type="text" placeholder="Kudos Title"
        onChange={props.updateKudosTitle}
        value={props.kudosTitle}
      />
    </FormGroup>
    <FormGroup>
      <Input type="text" placeholder="Kudos Text"
        onChange={props.updateKudosText}
        value={props.kudosText}
      />
    </FormGroup>

    {/* <FormGroup> */}
    {/* <Input */}
    {/* // type="textarea"
      // placeholder="Kudos text"
      // value={props.kudosText}
      // onChange={props.updateKudosText}
      // onChange={props.updateKudosTitle}
      // onChange={props.updateReceiver}
      /> */}
    {/* </FormGroup> */}
    <FormGroup>
      <Button onClick={props.postData}> Give Kudos </Button>
    </FormGroup>
  </Form >
)

export default KudosForm;