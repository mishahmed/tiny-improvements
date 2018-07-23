import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select">
                {props.users.map(element => <option>{element.name}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos text" />
        </FormGroup>
    </Form>
)

export default KudosForm;