import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../../common/history';
import { EllipseArea } from "../../utilities/shapeCalculators";
import storeOptions from "../../utilities/storeValues";

// Ellipse
export default function Ellipse()  {
    const [major, setMajor] = useState<number>(0);
    const [minor, setMinor] = useState<number>(0);
    const getMajor = (event: React.FormEvent<HTMLInputElement>): void => {
        let inputValue = parseInt(event.currentTarget.value)
        setMajor(inputValue)
    }

    const getMinor = (event:  React.FormEvent<HTMLInputElement>): void => {
        let inputValue = parseInt(event.currentTarget.value)
        setMinor(inputValue)
    }

    const calculteArea =():void=>{
        let cal = new EllipseArea(major, minor).area()
        storeOptions.setInputs("major axis " + major + " and minor axis " + minor + " ")
        storeOptions.setArea(cal)
        history.push('/step3')
    }

    const nextStep = (): void => {
       return (major>0 && minor>0) ? calculteArea():alert("please enter numbers")
    }
    return (
        <React.Fragment>
            <p>
                You have selected a ellipse, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><span> Major axis:</span></Col>
                <Col md={10}>
                    <input onChange={getMajor} placeholder="Major axis" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={2}><span> Minor axis:</span></Col>
                <Col md={10}>
                    <input onChange={getMinor} placeholder="Minor axis" />
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