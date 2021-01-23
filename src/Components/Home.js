import React from "react";
import './Home.scss';
import {Col,Row} from "react-bootstrap";
function Home() {
    return (

        <div className="Home container-fluid ">
             <Row>
                 <Col md='2'/>
                 <Col md='6' className='hero'/>
                 <Col md='4' className='tittle'>
                     <h1>Valentin Kornyenko</h1>
                     <h2>bass player  composer  teacher</h2>
                 </Col>
             </Row>
        </div>
    );
}

export default Home;
