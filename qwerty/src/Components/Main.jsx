import { Col, Row } from "react-bootstrap";

import { getMusicAction } from "../actions/actions";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    getMusicAction("queen", "#bonobo");
    getMusicAction("nirvana", "#nirvana");
    getMusicAction("eminem", "#hipHopSection");
  }, []);
  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="bonobo">
            <h2>Bonobo Selection</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="bonobo"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="nirvana">
            <h2>Nirvana Selection</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="nirvana"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="blues">
            <h2>Blues</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="blues"
            ></Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default Main;
