import React from 'react'
import UnansweredRequests from './UnansweredRequests';

const ChurchRequestBoard = (userToken) => {

    return (
        <div style={{ marginTop: '10%'}}>
            <div>
                <UnansweredRequests/>
            </div>
        </div >
    )
}

export default ChurchRequestBoard;

// import React, {
//     useEffect,
//     useState,
// } from 'react'

// import {
//     Container,
//     Row,
//     Col,
//     Card,
//     Button
// } from 'react-bootstrap'

// export default function ChurchRequestBoard() {

//     const [openRequests, setOpenRequests] = useState([])
//     const [activeRequests, setActiveRequests] = useState([])

//     useEffect(() => {
//         // get unclaimed requests within a certain distance
//         fetch('requests')
//             .then(res => res.json())
//             .then((res) => {
//                 setOpenRequests(res)
//             })
//     }, [])

//     const handleAccept = (id) => {
//         // PUT request to change request to have isClaimed=true
//         // and a ref to the church id attached to the Request &&/|| request id being pushed to churches active request array
//         console.log(`Accept request ${id}`);
//         setActiveRequests([...activeRequests, openRequests.find((request) => request._id === id)])
//         setOpenRequests(openRequests.filter((request) => request._id !== id))
//     }

//     const handleComplete = (id) => {
//         // Not sure what this would do in the models but should probably have some way of marking requests as completed
//         console.log(`Complete request ${id}`);
        
//     }

//     return (
//         <>
//             <Container>
//                 {/* Should this be a seperate view? Not sure what the layout is here */}
//                 <h2>Active Requests</h2>
//                 <Row xs={1} md={2}>
//                     {activeRequests.map(({ _id, title, description }) => (
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{title}</Card.Title>
//                                 <Card.Text>{description}</Card.Text>
//                                 <Button onClick={() => handleComplete(_id)}>Complete</Button>
//                             </Card.Body>
//                         </Card>
//                     ))}
//                 </Row>
//                 <h2>Find Requests</h2>
//                 <Row xs={1} md={2}>
//                     {openRequests.map(({ _id, title, description }) => (
//                         <Col key={_id}>
//                             <Card >
//                                 <Card.Body>
//                                     <Card.Title>{title}</Card.Title>
//                                     <Card.Text>{description}</Card.Text>
//                                     <Button onClick={() => handleAccept(_id)}>Accept</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </>
//     )
// }

//export default ChurchRequestBoard;

