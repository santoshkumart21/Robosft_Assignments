import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Header from '../header';
import Paragraph from '../paraGraph';
import history from '../history';
import options from "../classes/storeOptions";


class Step3 extends Component {
    render() {
        let getValue: any[] = options.getArea()
        let getInput: any[] = options.showInputs()
        let getShape: any[] = options.getOption()
        let shape: string = getShape[0]
        return (
            <Container  fluid={true}>
                {/* Header  section*/}
                    <Header />
                {/* Header  section*/}               
                <Row style={{ margin: "15px" }}>
                    <Col md={5}  >
                        <Paragraph />
                    </Col>
                    <Col md={5} style={{border:'2px solid grey',borderRadius:'15px'}}>
                        <h2>Step 3 : Your results </h2>
                        {/* Shape selection form starts here  */}
                        <Form>                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    {/* <Form.Label as="legend" > */}
                                    <p>
                                        You have calculated the area of a { shape+" "}
                                        with {getInput}. Below is your result:
                                        {/* </Form.Label> */}
                                    </p>
                                    {/* Radio buttons section */}
                                    <Col style={{display:'grid',justifyContent:'center'}}>
                                        <Form.Label><h4>The area is <b>{getValue[0]}</b></h4></Form.Label>
                                    {/* <Form.Control type="email" placeholder="text" /> */}
                                    </Col>
                                    {/* Radio buttons section */}
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
                        <div style={{ backgroundColor: 'lightgrey', margin: "20px", height: '240px', textAlign: 'center' }}>
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