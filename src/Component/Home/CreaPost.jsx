import React from "react";
import { Container } from "react-bootstrap";
import { Calendar3, Image, TextIndentLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ModalePost from "./ModalePost";

const CreaPost = () => {
  const user = useSelector((state) => state.user.content);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="bg-white rounded-3 p-3 border">
      <div className="d-flex border-secondary align-items-center">
        <div className="me-3">
          <div>
            <img
              className="rounded-circle fluid"
              src={user.image}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="p-0 pe-2 w-100">
          <div className="border rounded-5 p-3 " onClick={() => setModalShow(true)}>
            Crea un post
          </div>
          <ModalePost show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex align-items-center pointer">
          <Image color="#378FE9" />
          <p className="ms-2 mb-0">Contenuti Multimediali</p>
        </div>

        <div className="d-flex align-items-center pointer">
          <Calendar3 color="#C37D16" /> <p className="ms-2 mb-0">Evento</p>
        </div>
        <div className="d-flex align-items-center pointer">
          <TextIndentLeft color="#E06847" />
          <p className="ms-2 mb-0">Scrivi un articolo</p>
        </div>
      </div>
    </Container>
  );
};
export default CreaPost;
