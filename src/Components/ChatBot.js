import { useEffect } from "react";
import { Container,Button,Row,Col,InputGroup,FormControl } from "react-bootstrap";

export default function ChatBot({setUser,user})
{
    document.body.style.backgroundColor = "white";
    const messages=[
        {
            user:"hi",
            you:"hi",
        }
    ]
    useEffect(()=>{

    },[])
    
    return <>
     <Button style={{position:"absolute",top:40,left:40}} onClick={()=>{setUser()}}>Go back</Button>
     <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',boxShadow:"2px 20px 30px 10px grey",padding:20,maxWidth:700}}>
        <Col>
            <Row style={{padding:20}}>
                <h1>Let's chat</h1>
            </Row>
            <Row>
                <Container style={{width:"90%",minHeight:500,border:"2px solid black",padding:10}}>

                </Container>
            </Row>
            <Row style={{margin:10,padding:10}}>
            <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2">
                    Send
                    </Button>
            </InputGroup>
            </Row>
        
        </Col>
    </Container>
    </>
}