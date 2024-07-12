import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
const SideBar = () => {
  return (
    <Col className="col-2">
      <Navbar
        expand="md"
        className="fixed-left justify-content-between"
        id="sidebar"
      >
        <Container fluid className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Collapse>
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="flex-column text-light">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Playlist
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Top 100
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Favs
                </Nav.Link>
                <Form className="mt-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </InputGroup>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
        </div>
      </Navbar>
    </Col>
  );
};
export default SideBar;
