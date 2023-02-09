import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat";
// import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssistantIcon from '@mui/icons-material/Assistant';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ShareIcon from '@mui/icons-material/Share';


function App() {
    return (
        <div id="App">
            <Container>

            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                        alt="Zeta Logo"
                        src="/ZetaLogo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Zeta
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-5 align-items-center">
                <Col md={8} lg={8} xl={8}>
                    <h1 className="title">The AI-powered virtual assistant for real estate agents</h1>
                    <h4 className="subtitle">Say goodbye to cluttered inboxes and missed calls. Zeta handles it all, so you can focus on what really matters: closing deals.</h4>
                    <Row xs={2} sm={2} md={2} lg={2} xl={2} className="g-5 align-items-center">
                        <Col>
                            <QuestionAnswerIcon />
                            <p className="heading">Communications Hub</p>
                            <p className="body">Built-in phone, text, and email capabilities let you talk to your customers on their preferred channel, all from one CRM.</p>

                            <AssistantIcon />
                            <p className="heading">Personalized, 24/7 Assistant</p>
                            <p className="body">Zeta answers calls, texts, emails, and chats across all your marketing channels, 24/7. Plus, Zeta automatically follows up with prospects—saving your team precious time.</p>
                        </Col>
                    
                        <Col>
                            <ScheduleIcon />
                            <p className="heading">Schedule Showings on Autopilot</p>
                            <p className="body">Let Zeta schedule your showings, so you can focus your time on what matters most: closing deals.</p>
                   
                            <ShareIcon />
                            <p className="heading">Uses Your Property Database</p>
                            <p className="body">Since Zeta connects directly to your YGL, it can quickly send clients property listings, and answer property-specific questions.</p>
                        </Col>
                    </Row>
                </Col>

                <Col md={4} lg={4} xl={4}>
                    <Image src="/ZetaDemo.gif" alt="Demo" id="demo"></Image>
                </Col>

            </Row>
            </Container>
        </div>
    );
}

export default App;
