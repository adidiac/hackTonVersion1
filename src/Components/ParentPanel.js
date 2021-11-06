import { Container,Row,Col,Button } from "react-bootstrap";
import homeBackground from '../Images/backgroundHome.jpg'
import * as Icons from 'react-icons/md'
import * as Icons2 from 'react-icons/fa'
export default function ParentPanel({setUser,user,setScreenParent})
{
    document.body.style.backgroundColor = "black";
    const options=[
        {
            icon:<Icons.MdOutlineLunchDining  style={{height:100,width:100}}> </Icons.MdOutlineLunchDining>,
            title:'Obesity prediction',
            onclick:()=>{
                setScreenParent("obesity")
            }
        },
        {
            icon:<Icons2.FaHeart  style={{height:100,width:100}}></Icons2.FaHeart>,
            title:'Sentiment analysis',
            onclick:()=>{
                setScreenParent("sentiment")
            }
        },
    ]
    return <>
    <img id="image_home" src={homeBackground} ></img>
    <Button style={{position:"absolute",top:40,left:40}} onClick={()=>{setUser("")}}>Log out</Button>
    <Container  style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}}>
        <Col>
        <Row>
            <h1 style={{color:"white"}}>With what problem can we help you?</h1>
        </Row>
        <Row className="justify-content-md-center">
            {options.map((e)=>{
                return <Col onClick={()=>{e.onclick()}} className="mybutton" style={{boxShadow:"2px 20px 30px 10px grey",margin:20,backgroundColor:"white",maxWidth:200,padding:20,margin:20}}>
                        <Row className="justify-content-md-center">
                            {e.icon}
                        </Row>
                        <Row className="justify-content-md-center">
                            {e.title}
                        </Row>
                    </Col>
            })}
        </Row>
        </Col>
    </Container>
    </>
}