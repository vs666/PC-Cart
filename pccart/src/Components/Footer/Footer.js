import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';
const Style = styled.div`
    *{
        background-color: rgb(20,20,50);
        color: white;
    }
    .listing{
        alignItems:right;
    }
    code{
        color:#b51010;
    }
`;

const FooterPage = () => {
    return (
        <Style>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="4">
                            <h5 className="title">PC-Cart</h5>
                            <p>
                                This is a promising e-commerce platform.
                            </p>
                            <p>
                                Email : <code>varulsrivastava06@gmail.com</code>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" style={{paddingLeft:'19vh'}}>
                            <img src={require("./../../images/logo.png")} alt="PC-Cart" height="200em" width="200em" />
                        </MDBCol>
                        <MDBCol className="listing" md="4">
                            <h5 className="title">Categories</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="/find/processors">processors</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/find/gpu">graphics card</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/find/monitors">display</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/cart">My Cart</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> pccart.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </Style>
    );
}

export default FooterPage;