import { Container,Row,Col,Form,Button } from "react-bootstrap";
import { useState } from "react";
import { render } from "react-dom";
import obesity from './Assets/obesity.png'
import question from './Assets/question.png'
import overweight from './Assets/overweight.png'
import normal from './Assets/normal.png'
import * as Icons from 'react-icons/md'
import axios from "axios";
export default function ObesityPrediction({setScreenParent})
{
    document.body.style.backgroundColor = "white";
    const [type,setType]=useState("")
    const render=()=>{
        console.log(type);
        if(type==="Normal Weight")
        {
            return <Col>
               <Row className="justify-content-md-center">
            <img style={{width:300,height:300}} src={normal}></img>
                </Row>
                <Row>
                    <h5 style={{color:"green"}}>Normal weight</h5>
                </Row>
                </Col>
        }
        if(type==="Overweight Level I")
        {
            return <Col>
               <Row className="justify-content-md-center">
                    <img style={{width:300,height:300}} src={overweight}></img>
                </Row>
                <Row>
                    <h5 style={{color:"orange"}}>Overweight Level I</h5>
                </Row>
                </Col>
        }
        if(type==="Overweight Level II")
        {
            return <Col>
               <Row className="justify-content-md-center">
                    <img style={{width:300,height:300}} src={overweight}></img>
                </Row>
                <Row>
                    <h5 style={{color:"orange"}}>Overweight Level II</h5>
                </Row>
                </Col>
        }
        if(type==="Obesity Type I")
        {
            return <Col>
             <Row className="justify-content-md-center">
                    <img style={{width:300,height:300}} src={obesity}></img>
                </Row>
                <Row>
                    <h5 style={{color:"red"}}>Obesity Type I</h5>
                </Row>
                </Col>
        }
        if(type==="Obesity Type II")
        {
            return <Col>
             <Row className="justify-content-md-center">
                    <img style={{width:300,height:300}} src={obesity}></img>
                </Row>
                <Row>
                     <h5 style={{color:"red"}}>Obesity Type I</h5>
                </Row>
                </Col>
        }
        if(type==="Obesity Type III")
        {
            return <Col>
             <Row className="justify-content-md-center">
                    <img style={{width:300,height:300}} src={obesity}></img>
                </Row>
                <Row>
                    <h5 style={{color:"red"}}>Obesity Type I</h5>
                </Row>
                </Col>
        }
        return <Col>
        <Row className="justify-content-md-center">
            <img style={{width:300,height:300}} src={question}></img>
        </Row>
        <Row>
            <h5>Waiting for your data</h5>
        </Row>
         </Col>
    }
    const sendData=(e)=>{
        let array=[];
        array.push(e.target[0].value);
        array.push(e.target[1].value);
        array.push(e.target[2].value);
        array.push(e.target[3].value);
        array.push(e.target[4].value);
        array.push(e.target[5].value);
        array.push(e.target[6].value);
        array.push(e.target[7].value);
        array.push(e.target[8].value);
        array.push(e.target[9].value);
        array.push(e.target[10].value);

        console.log(array.join("."));
        //set type
        axios.post("http://localhost:2409/parent/obesityPrediction",{args: array.join('.')}).
        then((res)=>{
            console.log(res.data.trim())
            setType(res.data.trim());
        }).catch(function (error) {
        
            console.log(error.toJSON());
          })

    }
    return  <>
    <Button style={{position:"absolute",top:40,left:40}} onClick={()=>{setScreenParent("")}}>Go back</Button>
    <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',minWidth:"70vh",minHeight:"70vh"}}>
        <Row style={{justifyContent:"space-evenly"}}>
            <Col style={{boxShadow:"2px 20px 30px 10px grey",padding:20,maxHeight:"70vh",overflowY:"scroll",margin:10}}>
            <h3> Please enter all necesar data for determination</h3>
            <Form style={{margin:20}} onSubmit={(e)=>{
                e.preventDefault();
                sendData(e);
            }}>
                <Form.Select aria-label="Default select example">
                <option>Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Family history with overweight</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Frequent consumption of high caloric food</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Frequency of consumption of vegetables</option>
                <option value="1">Sometime</option>
                <option value="2">Frequently</option>
                <option value="3">Always</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Number of main meals</option>
                <option value="1">1 meals</option>
                <option value="2">2 meals</option>
                <option value="3">3 meals</option>
                <option value="4">4 meals or over</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Consumption of food between meals </option>
                <option value="0">No</option>
                <option value="1">Sometimes</option>
                <option value="2">Frequently</option>
                <option value="3">Always</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Consumption of water daily</option>
                <option value="1">1 liter</option>
                <option value="2">2 liter</option>
                <option value="3">3 liter or over</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Calories consumption monitoring</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Physical activity frequency </option>
                <option value="0">No</option>
                <option value="1">Sometimes</option>
                <option value="2">Frequently</option>
                <option value="3">Always</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Time using technology devices </option>
                <option value="0">0 hour</option>
                <option value="1">1 hour</option>
                <option value="2">2 hour over</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                <option>Transportation used </option>
                <option value="0">Walking</option>
                <option value="1">Bike</option>
                <option value="2">Public Transportation</option>
                <option value="3">Automobile</option>
                </Form.Select>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            <Col style={{boxShadow:"2px 20px 30px 10px grey",padding:20,maxHeight:"70vh",overflowY:"scroll",margin:10}}>
                <Row>{type?<h3>Your result:</h3>:<></>}</Row>
                {
                    render()
                }
            </Col>
        </Row>
    </Container>
    </>
}