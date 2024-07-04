import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (  
        <Navbar expand="lg" className="navbar">
        <Container fluid className="nav-con">
            
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center">
                        <div><Link to="/">HOME</Link></div>
                        
                        <div>
                            <img src={logo} alt="Parliament Paintball" className="logo"/>
                        </div>

                        <div>
                        <Dropdown title="INFO" id="info">
                        <Dropdown.Item as={Link} to= "info" id="item">GENERAL INFORMATION</Dropdown.Item>
                        <Dropdown.Item as={Link} to= "rules" id="item">RULES</Dropdown.Item>
                        <Dropdown title="PLAN" id="item">
                            <Dropdown.Item as={Link} to= "events" id="item">EVENTS</Dropdown.Item>
                            <Dropdown.Item as={Link} to= "packages" id="item">PACKAGES</Dropdown.Item>
                        </Dropdown>

                        
                        </Dropdown>
                        </div>
                    
                    
                    </Nav>
                </Navbar.Collapse>
           
          
        </Container>
      </Navbar>
    );
}
 

export default Navigation;