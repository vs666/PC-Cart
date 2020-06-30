import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import cart from './CData';
const code_index = []
code_index.push(require('./processors.json'))
code_index.push(require('./gpu.json'))
code_index.push(require('./monitor.json'))

class Table extends Component {
    constructor(props) {
        super(props);
        console.log("HAHA "+parseInt(props.index))
        console.log(code_index[props.index])
        this.state = {
            process: code_index[parseInt(props.index)]
        }
    }
    addToCart(element) {
        if (element == null) {
            alert("Invalid Selection");
            return;
        }
        else {
            cart.push({ id: element.id, price: element.price, name: element.product,img:element.img })
            console.log("Appended Cart : ", cart);
            alert("Added Item to cart");
        }
    }

    render() {
        const menu = this.state.process.map((ele) => {
            return <div key={ele.id} className="col-12 col-md-2 m-1">
                <Card >
                    <CardImg width="100%" src={ele.img} alt={ele.category} />
                    <CardTitle style={{ fontSize: 3 + 'vh' }} onClick={() => { this.addToCart(ele) }}>{ele.product}</CardTitle>
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

export default Table;

