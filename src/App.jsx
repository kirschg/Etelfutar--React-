import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <header className="constant">
           <h1>asd</h1>
      </header>
      <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <article>
            
            <p>Fedezd fel a nemzetközi konyha ízletes világát, ahol a hagyományos fogások és a modern gasztronómiai élmények találkoznak! A Ételfutár® célja, hogy egyszerűbbé és élvezetesebbé tegye számodra a finom ételek rendelését, bármilyen alkalomra.</p>
            <h3>Akciók és kedvezmények</h3>
            <p>Ne felejts el körülnézni aktuális akcióink között! Rendszeresen kínálunk kedvezményeket és különleges ajánlatokat, hogy még jobban kihasználhasd a Ételfutár® előnyeit.</p>

            <h3 className="test" onClick="Cities()">Rendelj Most!</h3>

            <p>Legyen szó egy családi vacsoráról, baráti összejövetelről vagy csak egy egyszerű ebédről, a Ételfutár® a tökéletes választás számodra! Kényeztesd magad a legfinomabb magyar ételekkel, és tapasztald meg a gyors és megbízható kiszállítást.</p>
            <h3>Miért rendeljen tőlünk?</h3>
            <p>Rendelj egyszerűen a legjobb éttermekből, és mi házhoz szállítjuk a kedvenc ételeidet gyorsan, kényelmesen, akár 30 percen belül!</p>
            <ul>
              <li>több mint 100 étterem közül válogathatsz! Legyen szó külföldi vagy hazai éttermekről</li>
              <li>Kedvezmények a hűséges vásárlóknak</li>
              <li>Kényelmes és biztonságos online rendelés és fizetés.</li>
              <li>Az ételnek nincs lába! Rendeld meg a Ételfutár®-tól</li>
            </ul>
            </article>
            <aside>
              
            </aside>
            <footer>
              <p>2024 Ételfutár® - Minden jog fenntartva.</p>
            </footer>
    </div>
  );
}
export default App;
