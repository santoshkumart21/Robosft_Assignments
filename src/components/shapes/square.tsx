import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../../common/history';
import { SquareArea } from "../../utilities/shapeCalculators";
import storeOptions from "../../utilities/storeValues";

// Square
export default function Square()  {
    const [length, setLength] = useState<number>(0);
    const getLength = (event: React.FormEvent<HTMLInputElement>): void => {
        let inputValue = parseInt(event.currentTarget.value)
        setLength(inputValue)
    }

    const calculteArea =():void=>{
        let cal = new SquareArea(length).area()
        storeOptions.setInputs("Length " + length + " ")
        storeOptions.setArea(cal)
        history.push('/step3')
    }

    const nextStep = (): void => {
        return length > 0 ? calculteArea():alert("please enter numbers")
    }
    return (
        <React.Fragment>
            <p>
                You have selected a square, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><span> Length:</span></Col>
                <Col md={10}>
                    <input onChange={getLength} placeholder="Length" />
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