import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import cart from './CData';

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
            return <div key={ele.id} className="col-5 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" src={ele.img} alt={ele.category} />
                    <CardTitle style={{ fontSize: 3 + 'vh' }}>{ele.product}</CardTitle>
                    <p>{ele.details}</p>
                    <p><code>US$ {ele.price}</code> <a href={ele.url}>Buy Now</a> </p>
                </Card>
            </div>
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

