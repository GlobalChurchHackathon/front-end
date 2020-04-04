import React from 'react'
import { Button, Table } from 'react-bootstrap';

const items = [
    {
        id: 1,
        fullName: "John Eldridge",
        product: "meats",
        Answered: true,
        Unanswered: false
    },
    {
        id: 2,
        fullName: "Jane Roberts",
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
    },
    {
        id: 4,
        fullName: "Andrew Thomas",
        product: "eggs",
        Answered: true,
        Unanswered: false
    },
    {
        id: 5,
        fullName: "Brian Johnson",
        product: "Meat",
        Answered: true,
        Unanswered: false
    },
    {
        id: 6,
        fullName: "Sandra Winsnes",
        product: "vegetables",
        Answered: true,
        Unanswered: false
    },
    {
        id: 7,
        fullName: "John Eldridge",
        product: "meats",
        Answered: true,
        Unanswered: false
    },
    {
        id: 8,
        fullName: "Jane Roberts",
        product: "grains",
        Answered: true,
        Unanswered: false
    },
    {
        id: 9,
        fullName: "Jake Human",
        product: "vegetables",
        Answered: true,
        Unanswered: false
    },
    {
        id: 10,
        fullName: "Andrew Thomas",
        product: "eggs",
        Answered: true,
        Unanswered: false
    }
]
const UnansweredRequests = (userToken) => {

    return (
        <div style={{ marginTop: '10%', height: '100vh'}}>
            <h1>Needs that still need to be met</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Full Name</th>
                        <th>Product Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr>
                                <td><a>{item.fullName}</a></td>
                                <td>{item.product}</td>
                                <td><Button style={{ width: '100%', height: '100%', border: '1px solid' }}>Answer Request</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default UnansweredRequests;