import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { PencilSquare, ThreeDots, ChevronCompactDown, Search, Sliders2, ChevronCompactUp } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, Form, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.content);

  return (
    <div
      className="position-fixed bottom-0 end-0 me-2 bg-white rounded-top-3 shadow-sm border"
      style={{ width: "280px", zIndex: "3" }}
    >
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="chat-collapse-content"
        aria-expanded={open}
        variant="white"
        className="w-100 p-0 border-0 "
      >
        <div className="d-flex align-items-center justify-content-between p-2">
          <Image
            src={user.image}
            roundedCircle
            className=" d-block"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
            }}
          />
          <p className="fw-semibold ms-2 mb-0">Messaggistica</p>
          <div className="d-flex gap-2 ms-auto">
            <ThreeDots size={17} className="ms-1 text-dark" />
            <PencilSquare size={15} color="black" className="ms-1 text-dark" />
            {open == true ? (
              <p className="ms-auto mb-0 pointer " onClick={() => setOpen(false)}>
                <ChevronCompactDown size={17} className="mx-1 text-dark" />
              </p>
            ) : (
              <p className="ms-auto mb-0 pointer" onClick={() => setOpen(true)}>
                <ChevronCompactUp size={17} className="mx-1 text-dark" />
              </p>
            )}
          </div>
        </div>
      </Button>
      <Collapse in={open}>
        <div className="p-2" id="chat-collapse-content">
          <InputGroup size="sm" className="mb-3 rounded-2">
            <InputGroup.Text id="inputGroup-sizing-sm" className="border-0 bg-body-secondary">
              <Search size={15} color="black" />
            </InputGroup.Text>
            <Form.Control
              className="border-0 bg-body-secondary"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Cerca messaggi"
            />
            <DropdownButton
              title={<Sliders2 size={18} color="black" />}
              variant="white"
              id="input-group-dropdown"
              align="end"
            >
              <Dropdown.Item href="#">Da leggere</Dropdown.Item>
              <Dropdown.Item href="#">Contassegnati con una stella</Dropdown.Item>
              <Dropdown.Item href="#">Messaggi InMail</Dropdown.Item>
              <Dropdown.Item href="#">I miei collegamenti</Dropdown.Item>
              <Dropdown.Item href="#">Archiviati</Dropdown.Item>
              <Dropdown.Item href="#">Posta indesiderata</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <div className="text-center pb-5 mb-5" style={{ height: "550px" }}>
            <Image
              src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
              className=" my-4"
              style={{
                width: "150px",
                height: "150px",
              }}
            />
            <h4 className="fw-normal">Ancora nessun messaggio</h4>
            <p>Entra in contatto e dai il via a una conversazione per far decollare la tua carriera</p>
            <Button className="bg-white text-secondary fw-bold border-secondary rounded-5">Invia un messaggio</Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Chat;
