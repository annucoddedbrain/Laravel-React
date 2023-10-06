import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import {  Card, Col, Container, Form, Row } from "react-bootstrap";
import {MdOutlineUpload, MdPhotoSizeSelectActual  } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiDownload } from "react-icons/bi";






export default function Addtemple() {
    return(
        <Layout className="pt-0">
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <Row className="my-3 bg-dark-subtle">
                            <Col xs={12} className="d-flex justify-content-center align-items-center gap-3">
                            <MdPhotoSizeSelectActual/>
                            <h5 className="my-2 text-center">Select Photos/Videos</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <div className="w-100 h-50 rounded rounded-2 border " style={{
                                    minHeight: 200
                                }}>


                                    <Form className="d-flex align-items-center justify-content-center h-100">
                                        <Form.Label htmlFor="upload-files" className="cursor-pointer d-flex flex-column justify-content-center align-items-center gap-2" >
                                            <BiDownload className="fs-4" />                                            Add files
                                        </Form.Label>
                                        <Form.Control id="upload-files" type="file" style={{
                                            appearance: "none",
                                            opacity: 0,
                                            width: 0,
                                            height: 0,
                                            padding: 0,
                                        }} accept="image/*" capture="camera" />
                                    </Form>


                                </div>

                                <Row>
                                    <Col xs={4}>

                                    </Col>

                                    <Col xs={4} className="p-2">
                                        <Link className="btn-btn"><h5 className="my-3 text-center bg-dark-subtle text-black">Next</h5></Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>



                    </Col>

                    <Col xs={1}>

                    </Col>


                    <Col xs={5} className="bg-dark-subtle h-100v my-3">
                        <Row>
                            <Col xs={4}>
                              <img src="/images/kedarnath1.jpg" className="img-responsive my-3 mx-2"/>
                            </Col>
                            <Col xs={4}>
                                <img src="/images/kashi.jpg" className="img-responsive my-3 mx-1"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/lingaraja.jpg" className="img-responsive my-3 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                                <img src="/images/amarnath.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/dwarkadhish.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/jagannath3.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kedarnath1.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/amarnath.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/jagannath3.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>


        </Layout>
    )
}
