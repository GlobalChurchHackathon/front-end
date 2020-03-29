import React from 'react'
import RequestCards from '../layouts/RequestCards';
import { Card } from 'react-bootstrap';

const RequestHelp = () => {


    return (
        <Card className='requestHelpPage' border='dark'>
            <Card.Body>
                <RequestCards />
            </Card.Body>
        </Card>
    )

};

export default RequestHelp