import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
//const Image_api='https://image.tmdb.org/t/p/w500';
const Timings=["10:30 AM","03:00 PM","06:00 PM","9:00 PM"]
function Movie(){
    const Image_api='https://image.tmdb.org/t/p/w500';

    const location=useLocation();
   // console.log(location)

    const {title,overview,poster_path}=location.state;
    const navigate= useNavigate();
    const [latlng,setLatLng]=useState({});
    const [theatres,setTheatres]=useState([]);
 //console.log()
    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
               setLatLng({
                lat:position.coords.latitude,
                lng:position.coords.longitude
               }) ;
            })
        }
    },[])

    useEffect(()=>{
        console.log(latlng);
        if(Object.keys(latlng).length>0){
            const geoAPI='https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=place:5199f4f752789d53405901df6dde38713140c00208e2031e77686f736f6e66697273743a6c6f63616c6974793a313032303330303539&limit=20&apiKey=93245552d7e5465d8882fc0218ce33ba'
            axios.get(geoAPI).then(res=>{
//console.log(res.data.features)
const featuresArr=res.data.features ;
const names=[];
featuresArr.map((feature)=>names.push(feature.properties.name));
setTheatres(names);
            })
        }
    },[latlng])
        return(
        <div>
            <Row>
                <Col><div>
                    <img style={{borderRadius:8,marginBottom:24}} src={Image_api+poster_path} height={500} />
                    <h4>{title}</h4>
                    <div>
                        {overview}
                    </div>
                    </div></Col>
                <Col>
                <div>
                {theatres.map((theatre,index)=>{
                    return(
                        <div key={index} style={ {marginBottom:20}}>
                            <div  style={ { marginBottom:10}}> <h3>{theatre}</h3></div>
                            {Timings.map((time)=>{
                                return <Button style={ { margin:10}} onClick={()=>{
                                    navigate('/select',{state:{title:title}})
                                }} key={time}>{time}</Button>
                            })}
                            </div>
                    )
                }
                )}
                </div>
                </Col>
            </Row>
        </div>
    )
};
export default Movie;