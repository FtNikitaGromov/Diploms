import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";
import Shop from '../pages/Shop';





function NavScrollExample() {
  return (
    <>
      <Navbar expand="lg" collapseOnSelect bg="dark" variant="dark" className='Navbar' >
        <Container fluid >
          <Navbar.Brand href="/">AnimeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/Shop">Каталог</Nav.Link>
              <Nav.Link href="/Contacts">Обратная связь</Nav.Link>
              <NavDropdown title="Прочее" id="navbarScrollingDropdown">
                <NavDropdown.Item href="blog">Блог</NavDropdown.Item>
                <NavDropdown.Item href="about">
                  Аниме-Культура 
                </NavDropdown.Item>
                <NavDropdown.Divider />
               
              </NavDropdown>

            </Nav>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/shop" component={Shop} />
   

        </Switch>
      </Router>
    </>
  );
}

export default NavScrollExample;