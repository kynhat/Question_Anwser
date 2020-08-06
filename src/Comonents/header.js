import React, { Component } from "react";
import { Row, Col } from "antd";
class header extends Component {
  render() {
    return (
      <>
        <Row style={{ margin: 60 }} >
          <Col
            style={{ borderStyle: "solid", width: 20 }}
            xs={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            LOGO
          </Col>
          <Row>
            <Col
              style={{ borderStyle: "solid", width: 200 }}
              xs={{ span: 11, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
            >
              Get started
            </Col>
            <Col
              style={{ borderStyle: "solid", width: 200 }}
              xs={{ span: 11, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
            >
              Question
            </Col>
            <Col
              style={{ borderStyle: "solid", width: 200 }}
              xs={{ span: 11, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
            >
              Survey
            </Col>
          </Row>
        </Row>
        {/* <Row style={{margin:60}}>
              <Col style={{borderStyle:'solid',width:50}} span={5}>LOGO</Col>
              <Col style={{borderStyle:'solid',width:50,marginLeft:100}} span={15}>LOGO</Col>
            </Row> */}
      </>
    );
  }
}

export default header;
