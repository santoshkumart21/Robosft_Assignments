import React, { Component } from 'react';
import history from '../common/history';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Header from '../common/header';
import Paragraph from '../common/paraGraph';
import storeOptions from "../utilities/storeValues";

interface propsIterface {
}
interface stateInterface {
    userOption:string
}

// Step1 class component
class Step1 extends Component<propsIterface, stateInterface> {
    constructor(props:propsIterface) {
        super(props)
        this.state = {
            userOption: ""
        }
    }
    userOption = () => {
        //Set selected option in store
        storeOptions.setOption(this.state.userOption)
        history.push('/step2')
    }

    render() {
        // TSX script starts here
        return (
            <Container fluid={true}>
                {/* Header  section*/}
                <Header />
                {/* Header  section*/}
                
                <Row className="margin-row">
                    <Col md={5}  >
                    <Paragraph />
                    </Col>
                    <Col md={5} className="input-form">
                        <h2>Step 1 : Select your shape </h2>
                        {/* Shape selection form starts here  */}
                        <Form >                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <p>
                                        Please select the shape that you would like
                                        to calculate the area of and press the
                                        button "Go to step 2"
                                    </p>
                                    {/* Radio buttons section */}
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            onClick={() => {
                                                this.setState({ userOption:"Rect"})
                                            }}
                                            label="Rectangle"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Circle"
                                            onClick={() => {
                                                this.setState({ userOption:"Circle"})
                                            }}
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Square"
                                            onClick={() => {
                                                this.setState({ userOption:"Square"})
                                            }}
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                         <Form.Check
                                            type="radio"
                                            label="Ellipse"
                                            onClick={() => {
                                                this.setState({ userOption:"Ellipse"})
                                            }}
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios4"
                                        />
                                    </Col>
                                    {/* Radio buttons section */}

                                </Form.Group>
                            </fieldset>
                            
                            {/* Cancel/Calculate buttons */}
                            <Form.Group as={Row} className="mb-3">
                                <Col >
                                    <Button onClick={this.userOption} disabled={this.state.userOption ? false : true}>Go to step 2</Button>
                                </Col>
                                <Col >
                                    or <span onClick={() => { window.location.reload() }}>Cancel</span>
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
        // TSX script ends here
        );
    }
}

export default Step1;