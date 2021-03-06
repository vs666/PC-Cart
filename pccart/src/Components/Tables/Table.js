import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import cart from './CData';
// const fs = require('fs');
const code_index = []
code_index.push(require('./../../scrapper/processors.json'))
code_index.push(require('./../../scrapper/gpu.json'))
code_index.push(require('./../../scrapper/keyb.json'))

class Table extends Component {
    constructor(props) {
        super(props);
        console.log("HAHA " + parseInt(props.index))
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
        else if (sessionStorage.getItem('hash') == null) {
            alert("Please sign in first.");
        }
        else {
            console.log("Sending data .....");
            var dict = { hashData: sessionStorage.getItem('hash').toString(), id: element.id, price: element.price, name: element.product, img: element.img };
            console.log(dict);
            axios
                .post('http://192.168.0.105:5000/postToCart', dict)
                .then(() => { console.log("Done dana done done") })
                .catch(err => {
                    console.log(err);
                });
            alert("Item added to cart.");
        }

    }

    render() {
        const menu = this.state.process.map((ele) => {
            if (ele.price == 0) {
                ele.price = 'NA';
            }
            return (
                <div key={ele.id} className="col-12 col-md-3 m-2" style={{ float: 'left' }}>
                    <Card style={{ backgroundColor: '#114' }}>

                        <CardImg style={{ width: 'auto', height: '40vh' }} src={ele.img} alt={ele.category} />

                        <CardTitle style={{ fontSize: 3 + 'vh', color: '#ffd' }} >{ele.product}</CardTitle>
                        <CardText style={{ marginLeft: '2vh', color: '#ffd' }}>
                            <p>{ele.details}</p>
                            <p style={{ fontSize: '3vh' }}><code>US$ {ele.price}</code></p>
                            <a href={ele.url} style={{ color: '#fff' }}>Buy Now</a>
                            <button onClick={() => { this.addToCart(ele) }} style={{ marginLeft: '2vh' }}> Add to cart</button>

                        </CardText>
                    </Card>
                </div>)
                ;
        });
        return (
            <div className="left-align container-fluid" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div >
                    {menu}
                </div>
            </div>
        );
    }
}

export default Table;

