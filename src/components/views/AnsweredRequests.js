import React from 'react'
import { Button, Table } from 'react-bootstrap';


const items = [
    {
        id: 1,
        fullName: "John Doe",
        product: "meats",
        Answered: true,
        Unanswered: false
    },
    {
        id: 2,
        fullName: "Doe John",
        product: "grains",
        Answered: true,
        Unanswered: false
    },
    {
        id: 3,
        fullName: "Jake Human",
        product: "vegetables",
        Answered: true,
        Unanswered: false
    }
]
const AnsweredRequests = (userToken) => {

    return (
        <div style={{ marginTop: '10%'}}>
            <h1>Answered Requests</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Full Name</th>
                        <th>Product Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td><a to='/profile'>{item.fullName}</a></td>
                                <td>{item.product}</td>
                                <td><Button style={{ width: '100%', height: '100%', border: '1px solid' }}>Fulfill Request</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default AnsweredRequests;