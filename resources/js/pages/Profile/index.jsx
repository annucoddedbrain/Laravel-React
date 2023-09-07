import React from "react";
import Layout from "../../components/Layout";
import "./style.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import { MdMoreVert, MdOutlineGroups } from "react-icons/md";
import { FcCamera } from "react-icons/fc";
import { Link } from "react-router-dom";


export default function Profile() {

    return (
        <Layout>
            <Container fluid className="pt-3">
                <Row className="mb-5">
                    <Col xs={12}>
                        <Card className="w-100 border-0 rounded-4 shadow-bottom overflow-hidden">
                            <Card.Body className="p-0 d-flex">
                                <div className="col-5 px-5">


                                    <Row>
                                        <Col xs={3}>
                                            <div className="profile-image">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h5 className="profile-name mb-1">Sameer Tomar</h5>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={2} className="d-flex align-items-center justify-content-center">
                                            <Link className="border border-1 p-2 rounded-5 line-height-1 text-body bg-body-secondary">
                                                <MdMoreVert className="fs-4" />
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} className="d-flex align-items-center justify-content-center h4 text-muted wtu border-2 border-bottom">
                                            <Card.Text>
                                                Are you want to upload ?
                                            </Card.Text>
                                        </Col>
                                    </Row>

                                    <Row className="py-4">
                                        <Col xs={5} className="pb-2 d-flex align-items-center">
                                            <Link className="d-flex text-muted text-decoration-none gap-2"><FcCamera className="camera-orange fs-4" /><span>Photos/Video</span></Link>
                                        </Col>
                                        <Col xs={7} className="d-flex justify-content-between">
                                            <Link className="btn btn-accent rounded-5">+Add Post</Link>
                                            <Link className="btn btn-gray rounded-5">+Add Temple</Link>
                                        </Col>
                                    </Row>

                                </div>
                                <div className="d-flex rounded-4 col-7 h-mx-360">
                                    <img src="/images/temp1.jpg" className="img-responsive" />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <Card className="w-100 border-0 rounded-4 shadow-bottom overflow-hidden">
                            <Card.Body className="p-0">
                                <div xs={12} className="px-5">
                                    <Row>
                                        <Col xs={5} className="d-flex align-items-center justify-content-lg-around">
                                            <Link className="text-body"><MdOutlineGroups className="fs-2" /></Link>
                                            <h5 className="profile-name mb-0">Groups</h5>
                                        </Col>

                                        <Col xs={7} className="d-flex align-items-center justify-content-end mt-2">
                                            <Link className="btn btn-accent rounded-5">Create Groups</Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">Hindu Samhati</h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">Kattar Hindu Samaj</h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">Sanatan Dharm humara </h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>  
                                    <Row className="mt-3">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">हिन्दू संघ</h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">Jai Bholenath</h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col xs={3}>
                                            <div className="profile-image h-60 w-60 group-img">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h6 className="profile-name mb-1">ब्राह्मण भूमिहार एकता मंच </h6>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="d-flex align-items-center justify-content-center">
                                            <Link className="btn join col w-500 ">Join</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>

                        <div className="mt-5">
                        <h5>Tags</h5>
                        <Link className="btn col w-500 tag-btns rounded-5 m-2">#temple</Link>
                        <Link className="btn col w-500 tag-btns rounded-5 m-2">#mandir</Link>
                        <Link className="btn col w-500 tag-btns rounded-5 m-2">#sanatan-lok</Link>
                        <Link className="btn col w-500 tag-btns rounded-5 m-2">#sanatan</Link>
                        <Link className="btn col w-500 tag-btns rounded-5 m-2">#religion</Link>
                        <Link className="btn col w-500 rounded-5 m-2 tag-btns">#belief-in-god</Link>
                        </div>
                    </Col>

                    <Col xs={4}>
                    <div>
                        <img src="/images/temp2.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    </Col>
                    <Col xs={4}>
                    <div >
                        <img src="/images/temp2.jpg" className=" rounded-4 w-100 shadow-bottom"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}