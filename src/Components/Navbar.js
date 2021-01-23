import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
} from "react-router-dom";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import Home from './Home';
import AboutUs from './About';
import ContactUs from './Contact';
import Music from "./Music";
class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="transparent" variant="dark" expand="lg" sticky="top" className='navbar'>
                                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-lg-auto">
                                        <Nav.Link href="/">HOME</Nav.Link>
                                        <Nav.Link href="/about-us">ABOUT</Nav.Link>
                                        <Nav.Link href="/contact-us">CONTACT</Nav.Link>
                                        <Nav.Link href="/music-us">MUSIC</Nav.Link>
                                        <NavDropdown title="PHOTO" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    {/*<Form inline>*/}
                                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                                    {/*    <Button variant="outline-success">Search</Button>*/}
                                    {/*</Form>*/}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                                <Route path="/music-us">
                                    <Music />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;
