import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../history';
import { RectangleArea, CircleArea, SquareArea, EllipseArea } from "../classes/shapeCalculator";
import options from "../classes/storeOptions";

/*Below functions allows input fields for different shapes
We can add different shapes here if needed*/

// Rectangle
function Rect() {
    const [length, setLength] = useState<number>();
    const [width, setWidth] = useState<number>();
    const getlength = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setLength(inputValue)
    }
    const getWidth = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setWidth(inputValue)
    }
    const nextStep = (): void => {
        if (Number.isInteger(length) && Number.isInteger(width)) {
            let cal = new RectangleArea(length, width).area
            options.setInputs("length " + length + " and width" + width + " ")
            options.setArea(cal)
            history.push('/step3')
        }
        else {
            alert("please enter numbers")
        }
    }
    return (
        <React.Fragment>
            <p>
                You have selected a rectangle, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><text> Length:</text></Col>
                <Col md={10}>
                    <input onChange={getlength} placeholder="Length" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={2}>
                    <text> Width:
                    </text></Col>
                <Col md={10}>
                    <input onChange={getWidth} placeholder="Width" />
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
                                    or <text onClick={() => { history.push('/') }}>Cancel</text>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>

        </React.Fragment>
    );
}

// Circle
function Circle() {
    const [diameter, setDiameter] = useState<number>();
    const getDiameter = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setDiameter(inputValue)
    }
    const nextStep = (): void => {
        if (Number.isInteger(diameter)) {
            let cal = new CircleArea(diameter).area
            options.setInputs("Diameter " + diameter + " ")
            options.setArea(cal.toFixed(2))
            history.push('/step3')
        }
        else {
            alert("please enter numbers")
        }
    }
    return (
        <React.Fragment>
            <p>
                You have selected a circle, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><text> Diameter:</text></Col>
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
                                    or <text onClick={() => { history.push('/') }}>Cancel</text>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}

// Square
function Square() {
    const [length, setLength] = useState<number>();
    const getLength = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setLength(inputValue)
    }
    const nextStep = (): void => {
        if (Number.isInteger(length)) {
            let cal = new SquareArea(length).area
            options.setInputs("Length " + length + " ")
            options.setArea(cal.toFixed(2))
            history.push('/step3')
        }
        else {
            alert("please enter numbers")
        }
    }
    return (
        <React.Fragment>
            <p>
                You have selected a square, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><text> Length:</text></Col>
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
                                    or <text onClick={() => { history.push('/') }}>Cancel</text>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}

// Ellipse
function Ellipse() {
    const [major, setMajor] = useState<number>();
    const [minor, setMinor] = useState<number>();
    const getMajor = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setMajor(inputValue)
    }
    const getMinor = (e: any): void => {
        let inputValue = parseInt(e.target.value)
        setMinor(inputValue)
    }
    const nextStep = (): void => {
        if (Number.isInteger(major) && Number.isInteger(minor)) {
            let cal = new EllipseArea(major, minor).area
            options.setInputs("major axis " + major + " and minor axis" + minor + " ")
            options.setArea(cal.toFixed(2))
            history.push('/step3')
        }
        else {
            alert("please enter numbers")
        }
    }
    return (
        <React.Fragment>
            <p>
                You have selected a ellipse, please input
                the required variables.
            </p>
            <Row>
                <Col md={2}><text> Major axis:</text></Col>
                <Col md={10}>
                    <input onChange={getMajor} placeholder="Major axis" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={2}><text> Minor axis:</text></Col>
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
                                    or <text onClick={() => { history.push('/') }}>Cancel</text>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
}

//Export all functions with key and value as component
export let shapeComponents = { "Rect": Rect, "Circle": Circle, 'Square': Square, "Ellipse": Ellipse };