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
        else {
            cart.push({ id: element.id, price: element.price, name: element.product, img: element.img })
            console.log("Appended Cart : ", cart);
            alert("Added Item to cart");
        }
    }

    render() {
        const menu = this.state.process.map((ele) => {
            return (
                <div key={ele.id} className="col-12 col-md-3 m-2" style={{ float: 'left'}}>
                    <Card style={{backgroundColor:'#114'}}>

                        <CardImg style={{width:'auto',height:'40vh'}} src={ele.img} alt={ele.category} />

                        <CardTitle style={{fontSize: 3 + 'vh' ,color:'#ffd'}} >{ele.product}</CardTitle>
                        <CardText style={{ marginLeft: '2vh',color:'#ffd' }}>
                            <p>{ele.details}</p>
                            <p style={{fontSize:'3vh'}}><code>US$ {ele.price}</code></p>
                            <p><a href={ele.url} style={{color:'#fff'}}>Buy Now</a>
                                <button onClick={() => { this.addToCart(ele) }} style={{ marginLeft: '2vh' }}> Add to cart</button>
                            </p>
                        </CardText>
                    </Card>
                </div>)
                ;
        });
        return (
            <div className="left-align container-fluid" style={{marginLeft:'10%',marginRight:'10%'}}>
                <div >
                    {menu}
                </div>
            </div>
        );
    }
}

export default Table;

