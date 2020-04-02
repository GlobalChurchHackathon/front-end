import React from 'react'
import RequestCards from '../layouts/RequestCards';
import { Card } from 'react-bootstrap';
import '../assests/RequestHelp/RequestHelp.css'

const RequestHelp = () => {


    return (
    <div id="about-body">
        <Card className='requestHelpPage' border='white'>
            <Card.Body >
                    <RequestCards />
            </Card.Body>
            </Card>
    </div>
    )

};

export default RequestHelp