import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../../common/history';
import { CircleArea } from "../../utilities/shapeCalculators";
import storeOptions from "../../utilities/storeValues";

// Circle
export default function Circle() {
    const [diameter, setDiameter] = useState<number>(0);
    const getDiameter = (event: React.FormEvent<HTMLInputElement>): void => {
        let inputValue = parseInt(event.currentTarget.value)
        setDiameter(inputValue)
    }

    const calculateArea=():void=>{
        let cal = new CircleArea(diameter).area()
        storeOptions.setInputs("Diameter " + diameter + " ")
        storeOptions.setArea(cal)
        history.push('/step3')
    }

    const nextStep = (): void => {
        return diameter>0 ? calculateArea():alert("please enter numbers")
    }
    return (
        <React.Fragment>
            <p>
                You have selected a circle, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><span> Diameter: </span></Col>
                <Col md={10}>
                    <input onChange={getDiameter} placeholder="Diameter" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Form >
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                                <Col >
                                    <Button onClick={nextStep}>Go to step 3</Button>
                                </Col>
                                <Col >
                                    or <span onClick={() => { history.push('/') }}>Cancel</span>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}