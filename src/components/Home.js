import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Home() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar>

            <Jumbotron>
                <h1>Hello, world!</h1>
            </Jumbotron>

            <h2>Stop Buying Things</h2>
            <p>
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
                aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget
                massa.
            </p>

            <h3>Tell us something new</h3>

            <Container>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Control as="textarea" rows="6" placeholder="Message" />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0" className="d-md-none">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Lorem
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Ipsem
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Dolor
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <div className="d-none d-md-block">
                            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                                <Tab eventKey="one" title="Lorem">
                                    Tab 1
                                </Tab>
                                <Tab eventKey="two" title="Ipsem">
                                    Tab 2
                                </Tab>
                                <Tab eventKey="three" title="Dolor">
                                    Tab 3
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
