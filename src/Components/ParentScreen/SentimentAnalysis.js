import { Col, Container, Row,Form,FormControl,Button,ProgressBar,Modal } from "react-bootstrap";
import { useState } from "react";
import * as Icons from 'react-icons/md'
import axios from 'axios'
export default function SentimentAnalysis({setScreenParent})
{
    document.body.style.backgroundColor = "white";

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);setError("")};
    const handleShow = () => setShow(true);
  
    const [error,setError]=useState("")

    const [sentiments,setSentiments]=useState([])
    const [frazes,setFrazes]=useState([]);
    const sendData=(text)=>{
  
        if(text.endsWith(".")||text.endsWith("!"))
            setFrazes([...frazes,text]);
        else
        {
            if(text.endsWith("."))
                setFrazes([...frazes,text]);
            else if(text.endsWith("!"))
                setFrazes([...frazes,text]);
            else
                setFrazes([...frazes,text+"."]);
        }
        document.getElementById("inputSentiment").value="";
    }
    const send=()=>{
        //send frazes
        document.getElementById("inputSentiment").value="";
        setSentiments([])
        axios.post("http://localhost:2409/parent/sentiment",{phrase:frazes.join("")}).
        then((res)=>{
            console.log(res.data);
            let sentiments2=[]
            for(let i=0;i<frazes.length;i++)
            {
                sentiments2.push({
                    fraze:frazes[i],
                    sentiment:res.data[i]["Overall Sentiment"],
                    positive:res.data[i].Scores.positive,
                    neutral:res.data[i].Scores.neutral,
                    negative:res.data[i].Scores.negative,
                })
            }
            setSentiments(sentiments2)
            setFrazes([])
        }).catch(function (error) {
        
            handleShow();
            console.log(error.toJSON());
          });;
        //setFrazes
    }
    return <>
    <Button style={{position:"absolute",top:40,left:40}} onClick={()=>{setScreenParent("")}}>Go back</Button>
    <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',marginTop:40,padding:20,maxHeight:"80vh"}}>
        <Col>
        <Row style={{margin:20}}>
            <h3> Enter here your child words to give our opinion about his sentiments behind</h3>
        </Row>
        <Row style={{margin:20}}>
            <Form className="mb-3" style={{display:"flex",flexDirection:"row"}} onSubmit={(e)=>{
                e.preventDefault();
                sendData(e.target[0].value)
                }}> 
                <FormControl  id="inputSentiment"
                placeholder="Your text"
                aria-label="Your text"
                aria-describedby="basic-addon2"
                />
                <Button  id="button-addon2" type="submit">
                    <Icons.MdAdd></Icons.MdAdd>
                </Button>
            </Form>
        </Row>
        <Row style={{border:"1px solid black",padding:20}}>
            {frazes.map(e=>{
                return <div style={{backgroundColor:"blueviolet",color:"white",borderRadius:"5px",height:30,maxWidth:300,padding:5,margin:10}}>{e}</div>
            })}
        </Row>
        <Row style={{margin:20}} className="justify-content-md-end">
            <Button onClick={()=>{send()}} style={{maxWidth:50}}><Icons.MdSend></Icons.MdSend></Button>
        </Row>
        <Row>
        <Col style={{textAlign:"center",overflowY:"scroll"}}>
            {sentiments.map(e=>{
            return <Col style={{margin:40}}>
                    <Row  className="justify-content-md-center">
                        <h5>Phrase: {e.fraze} and overall sentiment is {e.sentiment}</h5>
                    </Row>
                    <br />
                    <Row  className="justify-content-md-center">
                        <h5>Positivity</h5>
                    </Row>
                    <br />
                    <Row>
                         <ProgressBar now={e.positive*100} />
                    </Row>
                    <br />
                    <Row  className="justify-content-md-center">
                        <h5>Neutral</h5>
                    </Row>
                    <br />
                    <Row>
                        <ProgressBar now={e.neutral*100} />
                    </Row>
                    <br />
                    <Row  className="justify-content-md-center">
                        <h5>Negativity</h5>
                    </Row>
                    <br />
                    <Row>
                        <ProgressBar now={e.negative*100} />
                    </Row>
                </Col>
            })}
        </Col>
        </Row>
        </Col>
    </Container>
    </> 
}