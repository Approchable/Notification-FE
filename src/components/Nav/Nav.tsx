import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../../assets/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Approachable Notification Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;