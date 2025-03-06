import { useState } from "react";
import { Calendar, CaretDownFill, Clock, Image, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Emoji from "./Emoji";
import { editPost, fetchSharePost } from "../redux/actions";
import { Form } from "react-bootstrap";

const ModalePost = (props) => {
  const user = useSelector((state) => state.user.content);
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const [picture, setPicture] = useState([]);
  const handlePicture = (event) => {
    setPicture(event.target.files);
  };

  const newPost = () => {
    dispatch(fetchSharePost(postText, picture[0]));
    setPostText("");
  };

  const [display, setDisplay] = useState(false);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-0 me-3" closeButton>
        <div className="d-flex align-items-start">
          <img
            className="rounded-circle"
            src={user.image}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          <div className="ms-3">
            <div className="d-flex align-items-center">
              <h3 className="me-3 mb-0">
                {user.name} {""} {user.surname}
              </h3>
              <CaretDownFill />
            </div>
            <p style={{ fontSize: 12 }}>Pubblica: Chiunque</p>
          </div>
        </div>
      </Modal.Header>
      <div className="m-2">
        <Form.Control
          as="textarea"
          className="border-0 shadow-none pb-5"
          placeholder="Di cosa vorresti parlare?"
          value={postText}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <Emoji value={postText} onChange={setPostText} />

      <div className="d-flex ms-3 mb-3 align-items-center">
        <Image onClick={() => setDisplay(!display)} className="pointer" />
        <Calendar className=" ms-4 pointer" />
        <PlusLg onClick={() => setDisplay(!display)} className=" ms-4 pointer" />
        {display && (
          <Form.Group controlId="formFile" className="mx-3">
            <Form.Control type="file" name="picture" onChange={handlePicture} />
          </Form.Group>
        )}
      </div>

      <Modal.Footer>
        <div className="d-flex align-items-center ms-auto mb-2 ">
          <Button variant="outline-light" className="border-0 rounded-circle ">
            <Clock />
          </Button>
          <Button
            variant="light"
            className="rounded-pill mx-2"
            onClick={() => {
              if (props.postid) {
                dispatch(editPost(props.postid, postText, picture[0]));
              } else {
                newPost();
              }
              props.onHide();
            }}
          >
            Pubblica
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalePost;
