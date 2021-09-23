import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Header from '../common/header';
import Paragraph from '../common/paraGraph';
import history from '../common/history';
import storeOptions from "../utilities/storeValues";

class Step3 extends Component {
    render() {
        const getValue: number[] = storeOptions.getArea()
        const getInput: string[] = storeOptions.showInputs()
        const getShape: string[] = storeOptions.getOption()
        const shape: string = getShape[0]
        return (
            <Container  fluid={true}>
                {/* Header  section*/}
                    <Header />
                {/* Header  section*/}               
                <Row className="margin-row">
                    <Col md={5}  >
                        <Paragraph />
                    </Col>
                    <Col md={5} style={{border:'2px solid grey',borderRadius:'15px'}}>
                        <h2>Step 3 : Your results </h2>
                        {/* Shape selection form starts here  */}
                        <Form>                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <p>
                                        You have calculated the area of a { shape+" "}
                                        with {getInput}. Below is your result:
                                    </p>
                                    <Col className='result-area'>
                                        <Form.Label><h4>The area is <b>{getValue[0]}</b></h4></Form.Label>
                                    </Col>
                                </Form.Group>
                            </fieldset>
                            {/* Cancel/Calculate buttons */}
                            <Form.Group as={Row} className="mb-3">
                                <Col >
                                    <Button onClick={() => { history.push('/')}}>Start Over</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                        {/* Shape selection form ends here  */}
                    </Col>
                    <Col md={2} >
                        <div className='banner-css'>
                            120x240
                            Ad Banner
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Step3;