import React, { Component } from 'react';
import history from '../history';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Header from '../header';
import Paragraph from '../paraGraph';
import options from "../classes/storeOptions";

// Step1 class component
class Step1 extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            userOption: ""
        }
    }
    userOption = () => {
        //Set selected option in store
        options.setOption(this.state.userOption)
        history.push('/step2')
    }

    render() {
        // const {userOption } = this.state
        // TSX script starts here
        return (
            <Container fluid={true}>
                {/* Header  section*/}
                <Header />
                {/* Header  section*/}
                
                <Row style={{ margin: "15px" }}>
                    <Col md={5}  >
                    <Paragraph />
                    </Col>
                    <Col md={5} style={{border:'2px solid grey',borderRadius:'15px'}}>
                        <h2>Step 1 : Select your shape </h2>
                        {/* Shape selection form starts here  */}
                        <Form >
                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    {/* <Form.Label as="legend" > */}
                                    <p>
                                        Please select the shape that you would like
                                        to calculate the area of and press the
                                        button "Go to step 2"
                                        {/* </Form.Label> */}
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
                                    or <text onClick={() => { window.location.reload() }}>Cancel</text>
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
        // TSX script ends here
        );
    }
}

export default Step1;