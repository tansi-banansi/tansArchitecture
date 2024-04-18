import React from "react";
import { Container, Navbar, Row , Col, Nav, Button} from "react-bootstrap";
import ImageGallery from "./components/imageGallery";
import ContactForm from "./components/contactForm";
import './App.css'

function App() {

  return (
    <div>
      <header className="w-100">
        <Navbar expand='lg' fixed="top" data-bs-theme='dark' className="bg-navbar-custom shadow" >
          <Container fluid className="m-1">
            <Navbar.Brand href="#" className="text-uppercase" style={{letterSpacing:'1px', fontFamily:'Montserrat'}}>Tans Architecture</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto'>
                <Nav.Link href="#about" className="mx-2" >About</Nav.Link>
                <Nav.Link href="#portfolio" className="mx-2"  >Portfolio</Nav.Link>
                <Nav.Link href="#services" className="mx-2" >Services</Nav.Link>
                <Button href="#contact" className="bg-button-custom px-4   btn-dark "  > Contact us</Button>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main style={{paddingTop:'72px'}} >

        <section id="about">
          <Container fluid className="bg-banner-custom d-grid align-items-center gx-0">
            <Row>
              <Col className="py-4 px-5 rounded-end-4" sm={12} md={10} lg={8} xxl={6} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <h1 className="text-white py-2">Visualizing Architecture | Crafting Reality</h1>
                <h4 style={{lineHeight:'1.5'}}>We deliver high-quality architectural visualization to transform your blueprints into immersive visual experiences.</h4>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="portfolio">
          <Container fluid className="bg-portfolio-custom gx-0" style={{paddingTop:'5vh', paddingBottom:'10vh'}}>
            <Row className="d-grid text-center justify-content-center">
              <h3 className="fw-medium" >What we have done</h3>
              <p>Take a look at some of our work.</p>
            </Row>
            <Row>
              <ImageGallery/>
            </Row>

          </Container>
        </section>

        <section id="services">
          <Container fluid className="bg-offer-custom gx-0 px-5" style={{paddingTop:'5vh', paddingBottom:'10vh'}}>
            <Row className="d-grid text-center justify-content-center">
              <h3 className="text-white">What we offer</h3>
              <p className="text-white">Explore our services.</p>
            </Row>

            <Row className="d-flex flex-row justify-content-between g-4">
              <Col sm={12}  lg={6}>
                <div className="bg-white rounded-4 px-4 py-3 text-center h-100">
                  <h4 className="py-2 fw-medium">Detailed Interior Rendering</h4>
                  <p>Our service specializes in creating meticulously detailed renderings of small interior spaces, ensuring every texture, shadow, and light interaction is captured with precision. Perfect for when you need an intricate showcase of your design's potential.</p>
                </div>
              </Col>
               
              <Col sm={12}  lg={6} >
                <div className="bg-white rounded-4 px-4 py-3 text-center h-100">
                  <h4 className="py-2 fw-medium">General Interior Visualization</h4>
                  <p> For larger spaces where the overall concept is key, we provide a more general rendering approach. This service focuses on conveying the space's scale and functionality without the minute details, ideal for conceptual stages or when broader strokes are needed.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact">
          <Container fluid className="bg-contact-custom gx-0 px-5" style={{paddingTop:'10vh', paddingBottom:'10vh'}}>
            <Row className="d-flex flex-row justify-content-center">
              <Col sm={12}  lg={6} >
                <div>                
                  <h3>Contact us</h3>
                  <p>We'd love to hear from you.</p>
                  <p>Response guaranteed by end-of day on weekdays!</p>  
                </div>

                <div>
                  <h3>Send us and email:</h3>
                  <ContactForm/>
                </div>
              </Col>

              <Col sm={12}  lg={6}>
                <div className="rounded-5" style={{height:'100%'}}>
                  <img src="/img/contact-us.jpg" alt="Support image for contacts" className="img-fluid w-100 h-100 object-fit-cover d-none d-sm-none d-md-none  d-lg-block" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer>
        <Container fluid className="bg-footer-custom py-2 px-3 gx-0">
          <Row className="d-flex flex-row justify-content">
            <Col sm={12}  lg={6}>
              <p className="text-light fw-lighter text-lg-start m-0">© 2024 Tans Architecture, All Right Reserved</p>
            </Col>
            <Col sm={12}  lg={6} className="ms-auto">
            <p className="text-light fw-lighter text-lg-end m-0">Designed in England</p>
            </Col>
          </Row>
        </Container>
      </footer>

    </div>

  );
}

export default App;
