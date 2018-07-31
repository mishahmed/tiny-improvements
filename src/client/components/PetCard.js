import React from "react";
import { Card, CardBody } from "reactsrap";
const PetCard = props => (
    <Card>
        <CardBody c1>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </CardBody>
    </Card>

)

export default PetCard;