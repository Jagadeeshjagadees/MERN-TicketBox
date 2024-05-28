import React from "react";
import { Col, Row } from "react-bootstrap";
import successImg from '../assets/popcon-pic.png'
import qrCode from '../assets/qr-code-fake.png'

export default function Success(){

    return(<div>
<Row >
    <Col>
    <div  style={{padding:10, display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div >
    <img src={successImg} height={300} />
   
        <h5 style={{margin:10}}>Ticket Confirmed</h5>
        <h6 style={{margin:10}}>Enjoy your Movie</h6>
    </div>
    </div>
    </Col>
    <Col>
    <div  style={{padding:10, display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img style={{marginRight:110,marginTop:50}} src={qrCode} height={200} />
    </div></Col>
</Row>
    </div>)
}