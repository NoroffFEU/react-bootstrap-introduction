import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import ContentTabs from "./ContentTabs";
import ContentAccordion from "./ContentAccordion";

function Home() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                    <Form inline className="form-search">
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Container>
            </Navbar>

            <Jumbotron style={{ backgroundImage: "url(images/jumbo.png)" }}>
                <Container>
                    <h1>Hello, world!</h1>
                </Container>
            </Jumbotron>

            <Container>
                <h2>Stop Buying Things</h2>
                <p>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
                    aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
                    eget massa.
                </p>

                <h3>Tell us something new</h3>
            </Container>

            <Container>
                <Row>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                    <Col md={6}>
                        <ContentAccordion />
                        <div className="d-none d-md-block">
                            <ContentTabs />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
