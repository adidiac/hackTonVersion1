import { Container,Form,Button, Col,Row,Tabs,Tab,Modal} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
export default function LoginParent({setUser,user})
{
    document.body.style.backgroundColor = "white";
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);setError("")};
    const handleShow = () => setShow(true);
  
    const [error,setError]=useState("")
    const sendDataRegister=
    (name,user,password)=>{
        console.log(user+" "+password);
        //TODO sent this to server
        axios.post("http://localhost:2409/auth/register",{email:user,password:password,name:name}).
        then((res)=>{
            console.log(res.data);
            setUser({type:"parent",logged:"yes"});
        }).catch(function (error) {
            setError("Email luat deja")
            handleShow();
            console.log(error.toJSON());
          });;

    }
    const sendData=(user,password)=>{
        console.log(user+" "+password);
        //TODO sent this to server
        axios.post("http://localhost:2409/auth/login",{email:user,password:password}).
        then((res)=>{
            console.log(res.data);
            setUser({type:"parent",logged:"yes"});
        }).catch(function (error) {
            //alert("Credentiale incorecte")
            setError("Credentiale incorecte")
            handleShow();
            console.log(error.toJSON());
          });;

    }

    return  <>
    <Button style={{position:"absolute",top:40,left:40}} onClick={()=>{setUser("")}}>Go Back</Button>
    <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',boxShadow:"2px 20px 30px 10px grey",padding:20}}>
        <Col>
        <Row>
            <h1>Please login or register first</h1>
        </Row>
        <Row>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="login" title="Login">
         <Form onSubmit={(e)=>{e.preventDefault();sendData(e.target[0].value,e.target[1].value)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Login
        </Button>
        </Form>
        </Tab>
        <Tab eventKey="register" title="Register">
         <Form onSubmit={(e)=>{e.preventDefault();sendDataRegister(e.target[0].value,e.target[1].value,e.target[2].value)}}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your full name please</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Register
        </Button>
        </Form>
        </Tab>
        </Tabs>
        </Row>
        </Col>
    </Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eroare</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

}