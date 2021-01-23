import React from "react";
import './Home.scss';
import {Col,Row} from "react-bootstrap";
function Home() {
    return (

        <div className="Home container-fluid ">
            {/*<h1>Valentin Kornyenko</h1>*/}
            {/*<h2>bass player & composer & teacher</h2>*/}
             <Row>
                 <Col md='3'/>
                 <Col md='6' className='hero'/>
                 <Col md='3'/>
             </Row>
        </div>
    );
}

export default Home;
