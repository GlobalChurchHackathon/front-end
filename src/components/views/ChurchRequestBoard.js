import React from 'react'
import { Button, Table } from 'react-bootstrap';
import AnsweredRequests from './AnsweredRequests';
import UnansweredRequests from './UnansweredRequests';

const ChurchRequestBoard = (userToken) => {

    return (
        <div style={{ marginTop: '10%'}}>
            <div>
                <AnsweredRequests/>
            </div>
            <div>
                <UnansweredRequests/>
            </div>
        </div >
    )
}

export default ChurchRequestBoard;