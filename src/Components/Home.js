import { Container,Row, Button, Col} from "react-bootstrap";
import homeBackground from '../Images/backgroundHome.jpg'
import * as Icons from 'react-icons/md'
export default function Home({setUser,user})
{
    document.body.style.backgroundColor = "black";
    const options=[{
        icon:<Icons.MdOutlineFace style={{height:100,width:100}}></Icons.MdOutlineFace>,
        title:'Child',
        onclick:()=>{
            console.log("ceva");
            setUser({...user,type:"child"});
            console.log(user);
        }
    },
    {
        icon:<Icons.MdEscalatorWarning style={{height:100,width:100}} ></Icons.MdEscalatorWarning>,
        title:'Parent',
        onclick:()=>{
            setUser({...user,type:"parent",logged:"no"});
        }
    }]
    return <>
    <img id="image_home" src={homeBackground} ></img>
    <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}}>
        <Col>
        <Row>
            <h1 style={{color:"white"}}> Hello</h1>
        </Row>
        <Row>
            <h1 style={{color:"white"}}>Are you a child or a parent? :)</h1>
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