import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import cart from './../../Database/cartdata.json';

class DisplayCart extends Component {
    constructor(props) {
        super(props);
        console.log(cart)
        this.state = {
            process: cart
        }
    }

    render() {
        const menu = cart.map((ele) => {
            if (ele.data.hashData == sessionStorage.getItem('hash')) {
                return <div key={ele.id} className="col-5 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={ele.data.img} alt={ele.category} />
                        <CardTitle style={{ fontSize: 3 + 'vh' }}>{ele.data.product}</CardTitle>
                        <p>{ele.data.name}</p>
                        <code>US$ {ele.data.price}</code>
                    </Card>
                </div>
            }
        });
        return (
            <div className="left-align container-fluid">
                <div >
                    {menu}
                </div>
            </div>
        );
    }
}

export default DisplayCart;

