import React from 'react'
import { Button, Table } from 'react-bootstrap';

//drop down, why do you need this item
//button fireEvent, when fired 'bag' icon number increments 

const items = [
    {
        id: 1,
        product: "Ground Beef",

    },
    {
        id: 2,
        product: "Rice"
    },
    {
        id: 3,

        //product: "vegetables"

        product: "Canned Goods"
    },
    {
        id: 4,
        product: "Pasta",

    },
    {
        id: 5,
        product: "Milk"
    },
    {
        id: 6,
        product: "Bread"

    }
]
const Food = (userToken) => {

    // const [product, addProduct] = React.useState(null)

    // React.useEffect(() => {
    //     if (window) {
    //         product(window(userToken))
    //     }
    // }, [userToken])

    return (

        //<div style={{ marginTop: '10%'}}>

        <div style={{ height: '200vh', paddingTop: '100px', paddingBottom: '100px' }}>

            <h1>Food</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Available Items</th>
                        <th>Add to bag</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Button style={{ width: '100%', height: '100%', border: '1px solid' }}>Add to bag</Button> */}
                    {
                        items.map(item =>
                            <tr>
                                {/* <td>{item.id}</td> */}
                                <td>{item.product}</td>
                                <td><Button style={{ width: '100%', height: '100%', border: '1px solid' }}>Add to bag</Button></td>
                            </tr>
                        )
                    }
                    <tr>
                        <td style={{ textAlign: "right " }} colspan={3}>Total Items:</td>
                    </tr>

                    <tr>
                        <td style={{ textAlign: "right " }} colspan={4}>
                            <Button>Place Order</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

export default Food;