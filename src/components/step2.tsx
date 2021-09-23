import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Header from '../common/header';
import Paragraph from '../common/paraGraph';
import { shapeComponents } from "./shapes";
import history from '../common/history';
import storeOptions from "../utilities/storeValues";

class Step2 extends Component {
    render() {
        // Get user selected shape from options class
        let getShape: string[] = storeOptions.getOption()
        let shape: string = getShape[0]
        const keyTyped = shape as keyof typeof shapeComponents;
        const Components = shapeComponents[keyTyped];

        return (
            <Container fluid={true}>
                {/* Header  section*/}
                <Header />
                {/* Header  section*/}
                {shape ?
                    (<Row className="margin-row">
                        <Col md={5}  >
                            <Paragraph />
                        </Col>
                        <Col md={5} className="input-form">
                            <h2>Step 2 : Insert your values </h2>
                            <Components />
                        </Col>
                        <Col md={2} >
                            <div className='banner-css'>
                                120x240
                                Ad Banner
                            </div>
                        </Col>
                    </Row>)
                    :
                    (<div>No shapes selected <Button onClick={() => { history.push('/') }}>Start Over</Button> </div>)}
            </Container >
        )
    }
}

export default Step2;