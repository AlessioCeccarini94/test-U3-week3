import { Form, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaHome, FaRegHeart } from "react-icons/fa"
import MyNavbar from "./MyNavbar"

function MySidebar() {
  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column d-sm-none d-md-block bg-dark"
      >
        <img
          className="d-inline-block align-top w-75 m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1024px-Apple_Music_logo.svg.png"
          alt=""
        />
        <Form.Control
          type="text"
          className="ms-1 me-1 bg-dark text-light border-black"
          placeholder="Search..."
          value={""}
          onChange={() => {
            console.log("ciao")
          }}
        />

        <Nav.Link
          as={Link}
          to="./"
          className="text-danger m-3 d-flex align-items-center"
        >
          <FaHome className="me-2" />
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="./favorites" className="text-danger m-3">
          <FaRegHeart className="me-2" />
          Favorite
        </Nav.Link>
      </Nav>
    </>
  )
}

export default MySidebar
