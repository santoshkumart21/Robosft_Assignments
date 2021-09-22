import React from 'react';
import { Row } from 'react-bootstrap';

function header() {
    return (
        <div>
            <Row style={{ border: '2px solid black', margin: "5px" }}>
                <h1>Shape Calculator</h1>
            </Row>
        </div>
    );
}

export default header;