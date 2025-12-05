import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { IoPlayBack } from "react-icons/io5"
import { TbPlayerPauseFilled } from "react-icons/tb"
import {
  IoPlayForward,
  IoPlaySharp,
  IoShuffleSharp,
  IoRepeat,
} from "react-icons/io5"
function MyNavbar() {
  return (
    <Navbar
      expand="md"
      data-bs-theme="dark"
      className="d-flex align-items-center"
    >
      <Container className="d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-between d-md-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <img
            className="d-inline-block align-top w-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1024px-Apple_Music_logo.svg.png"
            alt=""
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <Nav.Link as={Link} to="./">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="./favorites">
                Favorite
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button className="bg-dark border-0">LOGIN</Button>
        </div>
        <div className="align-items-center d-none d-md-flex">
          <div className="d-flex align-items-center d-none d-md-flex">
            <IoShuffleSharp className="me-4" />
            <IoPlayBack className="me-4" />
            <IoPlaySharp className="me-4" />
            <TbPlayerPauseFilled className="me-4 d-none" />
            <IoPlayForward className="me-4" />
            <IoRepeat className="me-4" />
          </div>
          <div className="d-flex align-top justify-content-center">
            <img
              src="./public/Apple_logo_grey.svg"
              alt=""
              style={{ width: "10%" }}
            />
          </div>
          <div>
            <Button variant="danger">Accedi</Button>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
