import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SelectSeat(){
/*const location=useLocation();
const navigate=useNavigate()
const {title}=location.state;
const [seatsMatrix,setSeats]=useState([]);
const [selectedSeats,setSelectedSeats]=useState([]);

const creatSeats=()=>{
    let totalRows=5;
    let numOfSeatsInRow=8;
    let tempSeats=[];
    let row=0;
    let ch='A';
    while(row<totalRows){
        let col=1;
        let rowArr=[];    
    
    while(col <= numOfSeatsInRow){
      
        rowArr.push(ch+col);
        col++;
    }
    tempSeats.push(rowArr);
    row++;
    ch=String.fromCharCode(ch.charCodeAt(0)+1) //this is increment letters a,b,c....
    setSeats(tempSeats)
};//console.log(tempSeats)
};
const handleSelect=(newseat)=>{
setSelectedSeats([...selectedSeats,newseat])
}
    return(<>
        <div>
<h3  className="d-inline-block">{title}</h3>
<div>{creatSeats}</div>
<center className="d-inline-block" style={{marginLeft:100}}>Screen this side</center>
 <div style={{marginTop:45}}>
    {seatsMatrix.map((seatsArr)=>{
        return (
        <Row style={{margin:20}}>
         { seatsArr.map((seat)=>{
            let isSelected=selectedSeats.indexOf(seat)>-1;
            return <Col><Button style={{backgroundColor: isSelected ? "green":'blue'}} onClick={()=>handleSelect}>{seat}</Button></Col>
                
         })}</Row>
          )
        
    })}
</div>
<div style={{marginTop:45}}>
    {selectedSeats.length>0 ?<div>{selectedSeats.map((seat)=>{
        return <span style={{marginRight:5}}>{seat}</span>
    })}seat selected <div> <h4>Total:Rs. {selectedSeats.length*200}</h4><Button onClick={()=>navigate('/success')}>CheckOut</Button></div> </div>:<div>No seats selected</div>}
</div>

        </div>
   </> )*/

const location=useLocation();
const navigate=useNavigate()
const {title}=location.state;

const [seatsMatrix,setSeats]=useState([]);
const [selectedSeats,setSelectedSeats]=useState([]);



const creatSeats=()=>{
    let totalRows=5;
    let numOfSeatsInRow=8;
    let tempSeats=[];
    let row=0;
    let ch='A';
    while(row<totalRows){
        let col=1;
        let rowArr=[];
    
    while(col <= numOfSeatsInRow){
      
        rowArr.push(ch+col);
        col++;
    }
    tempSeats.push(rowArr);
    row++;
    ch=String.fromCharCode(ch.charCodeAt(0)+1) //this is increment letters a,b,c....
    setSeats(tempSeats)
}
//console.log(tempSeats)
};
useEffect(()=>{
    creatSeats()
},[])
  
const handleSelect=(newseat)=>{
    setSelectedSeats([...selectedSeats,newseat])
    
    }
   return(<>
    <h3  className="d-inline-block">{title}</h3>

<center className="d-inline-block" style={{marginLeft:100}}>Screen this side</center>

<div>
{seatsMatrix.map((seatArr,index)=>{
    return(
        <div key={index} style={{height:'12vh'}}>
        <Row >
            {seatArr.map((seat,index)=>{
                let isSelected = selectedSeats.indexOf(seat)>-1;
                return(<Col key={index}>
            <Button onClick={()=>handleSelect(seat)} style={{padding:15,backgroundColor: isSelected ? "green":'blue'}}> {seat}</Button>   </Col>)
            })}
        </Row></div>
    )
})}
</div>
<div style={{marginTop:115}}>
{selectedSeats.length>0 ? <div>{selectedSeats.map((seat,index)=>{
    return <span key={index} style={{marginRight:20}}>{seat} </span> 
})}seat selected 
<div>
  <h4>Total: Rs. {selectedSeats.length*200}</h4> 
  <Button onClick={()=>navigate('/success')}>Check out</Button> 
</div>

</div>:<div>No seat selected</div>
}
</div>
   </>)
};
export default SelectSeat;
