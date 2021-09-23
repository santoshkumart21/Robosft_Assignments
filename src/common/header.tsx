import React from 'react';
import { Row } from 'react-bootstrap';

function header() {
    return (
        <div className='header-css'>
            <Row>
                <h1>Shape Calculator</h1>
            </Row>
        </div>
    );
}

export default header;