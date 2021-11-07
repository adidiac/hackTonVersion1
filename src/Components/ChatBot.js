import { useEffect, useState } from "react";
import { Container,Button,Row,Col,Form,FormControl } from "react-bootstrap";
import axios from 'axios'
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function updateScroll(){
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
}

export default function ChatBot({setUser,user})
{
    document.body.style.backgroundColor = "white";
    const [userId,setUserId]=useState();
    const [messages,setMessage]=useState([]);
    const sendData=(message1)=>{
        document.getElementById("inputChat").value="";
        console.log(messages)
        axios.post("http://localhost:2409/children/chatbot/",{message:message1,tokenSession:userId}).
        then((res)=>{
            console.log(res.data);
            setMessage([...messages,{message:message1,user:"userul"},{message:res.data,user:"bot"}])
            updateScroll();
        }).catch(function (error) {
            console.log(error)
          });;

        
        //send message and userId
    }
    useEffect(()=>{
        let id=makeid(6);
        setUserId(id);
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
                <Container style={{width:"90%",minHeight:500,maxHeight:500,border:"2px solid black",padding:10,overflowY:"scroll"}} id="chat">
                    {
                        messages.map((e)=>{
                            if(e.user=="userul")
                            {
                                return <Row className="justify-content-md-end" style={{margin:10}}
                                >
                                    <Col style={{maxWidth:100,padding:10,backgroundColor:"blueViolet",color:"white",borderRadius:"7px"}}>
                                    {e.message}
                                    </Col>
                                </Row>
                            }
                            else if(e.user=="bot")
                            {
                                return <Row className="justify-content-md-start" style={{margin:10}}>
                                     <Col style={{maxWidth:100,padding:10,backgroundColor:"blue",color:"white",borderRadius:"7px"}}>
                                    {e.message}
                                    </Col>
                                </Row>
                            }
                        })
                    }
                </Container>
            </Row>
            <Row style={{margin:10,padding:10}}>
            <Form className="mb-3" style={{display:"flex",flexDirection:"row"}}  onSubmit={(e)=>{
                e.preventDefault();
                sendData(e.target[0].value)
                }}> 
                    <FormControl id="inputChat"
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2" type="submit">
                    Send
                    </Button>
            </Form>
            </Row>
        
        </Col>
    </Container>
    </>
}