import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
    .jumbo{
        background-color: #113;
        background-backgroundSize: cover;
        color: #ccc;
        height : 10%;
        position: 'absolute';
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top : 0;
        left : 0;
        bottom : 0;
        right : 0;
    }
    .container{

        margin-left:20%;
        margin-top: 1%;
        margin-bottom: 1%;
    }
`;

const Jumbotron = (props) => {
    return (
        <Styles>
            <Jumbo fluid={true} className="jumbo">
                {/* <div className="overrlay"> */}
                    <Container>
                        {props.children}
                    </Container>
                {/* </div> */}

            </Jumbo>
        </Styles>
    )
}


export default Jumbotron;