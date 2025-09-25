import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ArrowRight, Plus } from "react-bootstrap-icons";

const ConsigliPerTe = () => {
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 mt-3 p-0">
      <Container className="p-4">
        <h6>Consigli per te</h6>
        <Row className=" aling-items-center mt-4 justify-content-between">
          <Col xs={8} xl={9} className="d-flex pointer">
            <div>
              <Image
                src="./5968322.png"
                className="me-2 d-block"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h6 className="m-0 text-black">Node.js</h6>
              <p className="m-0 mt-1 lh-sm">Node.js® is a JavaScript runtime built on Chrome V8 JavaScript engine.</p>
            </div>
          </Col>
          <Col xs={4} xl={3}>
            <Button id="skill-btn" className="ps-2 py-0 mt-2 text-primary border-primary">
              <Plus size={30} className="m-0 text-primary" /> Segui
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className=" aling-items-center mt-3 justify-content-between">
          <Col xs={8} xl={9} className="d-flex pointer">
            <div>
              <Image
                src="./stack.png"
                className="me-2 d-block"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h6 className="m-0 text-black">Stack Overflow</h6>
              <p className="m-0 mt-1 lh-sm">
                Stack Overflow empowers the world to develop technology through collective knowledge.
              </p>
            </div>
          </Col>
          <Col xs={4} xl={3}>
            <Button id="skill-btn" className="ps-2 py-0 mt-2 text-primary border-primary">
              <Plus size={30} className="m-0 text-primary" /> Segui
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className=" aling-items-center mt-3 justify-content-between">
          <Col xs={8} xl={9} className="d-flex pointer">
            <div>
              <Image
                src="./docker.png"
                className="me-2 d-block"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h6 className="m-0 text-black">Docker, Inc</h6>
              <p className="m-0 mt-1 lh-sm">
                Docker helps developers bring their ideas to life by conquering the complexity of app development.
              </p>
            </div>
          </Col>
          <Col xs={4} xl={3}>
            <Button id="skill-btn" className="ps-2 py-0 mt-2 text-primary border-primary">
              <Plus size={30} className="m-0 text-primary" /> Segui
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="border-top py-3 pointer">
        <p className="fw-bold text-center mb-0 ">
          Visualizza altro <ArrowRight />
        </p>
      </div>
    </Container>
  );
};
export default ConsigliPerTe;
