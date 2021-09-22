import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Header from '../header';
import Paragraph from '../paraGraph';
import { shapeComponents } from "../subComponents/inputShapes";
import options from "../classes/storeOptions";
import history from '../history';


class Step2 extends Component {
    render() {
        // Get user selected shape from options class
        let getShape: any[] = options.getOption()
        let shape: string = getShape[0]
        const keyTyped = shape as keyof typeof shapeComponents;
        const Components = shapeComponents[keyTyped];

        return (

            <Container fluid={true}>
                {/* Header  section*/}
                <Header />
                {/* Header  section*/}
                {
                    shape ?
                        (<Row style={{ margin: "15px" }}>
                            <Col md={5}  >
                                <Paragraph />
                            </Col>
                            <Col md={5} style={{ border: '2px solid grey', borderRadius: '15px' }}>
                                <h2>Step 2 : Insert your values </h2>
                                <Components />
                            </Col>
                            <Col md={2} >
                                <div style={{ backgroundColor: 'lightgrey', margin: "20px", height: '240px', textAlign: 'center' }}>
                                    120x240
                                    Ad Banner
                                </div>
                            </Col>
                        </Row>
                        )
                        : (<div>No shapes selected start <Button onClick={() => { history.push('/') }}>Start Over</Button> </div>)}
            </Container >

        )
    }
}

export default Step2;