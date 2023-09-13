import React from "react";
import Layout from "../../components/Layout";
import "./style.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import { MdMoreVert, MdOutlineGroups, MdShare } from "react-icons/md";
import { FcCamera } from "react-icons/fc";
import { Link } from "react-router-dom";
import GroupSuggestion from "../../components/GroupSuggestion";


export default function Profile() {


    window.addEventListener("scroll", function() {
        if( window.scrollY >= 50 ){
            document.body.classList.add('sticky-profile-header');
        }
        else{
            document.body.classList.remove('sticky-profile-header');
        }
    });

    return (
        <Layout>
            <Container fluid className="pt-3">
                <div className="sticky py-3 shadow rounded-4 px-3">
                    <Row className="flex-fill">
                        <Col xs={3} className="d-flex justify-content-between align-items-center">
                            <div className="profile-image">
                                <img src="/images/dummy.png" className="img-responsive" />
                            </div>
                            <div>
                                <h5 className="profile-name mb-1">Sameer Tomar</h5>
                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                            </div>
                        </Col>
                        <Col xs={9} className=" d-flex justify-content-end align-items-center gap-4">
                        <Link className="img-circle text-body btn-gray border h-auto w-auto"><MdMoreVert className="fs-2 p-1"/></Link>
                        <Link className="img-circle text-body btn-gray border h-auto w-auto"><MdShare className ="fs-2 p-1"/></Link>
                        <Link className="btn btn-gray h-auto  rounded-5 m-2">Temple Post</Link>
                        <Link className="btn btn-gray h-auto  rounded-5 m-2">Follow</Link>
                        <Link className="btn btn-accent h-auto  rounded-5 m-2 ">Message</Link>
                        {/* <Link className="img-circle text-body bg-dark-subtle border h-50 w-auto rounded-1 p-2 text-decoration-none">Follow</Link> */}
                        {/* <Link className="img-circle text-body bg-dark-subtle border h-50 w-auto rounded-1 p-2 text-decoration-none ">Message</Link> */}
                        </Col>
                    </Row>
                </div>
                
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
                    <Col xs={5}>
                        <Card className="w-100 border-0 rounded-4 shadow-bottom overflow-hidden py-3">
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
                                    <GroupSuggestion name="Hindu Samhati"/>
                                    <GroupSuggestion name="Kattar Hindu Samaj"/>
                                    <GroupSuggestion name="Sanatan Dharm humara"/>
                                    <GroupSuggestion name="हिन्दू संघ"/>
                                    <GroupSuggestion name="Jai Bholenath"/>
                                    <GroupSuggestion name="ब्राह्मण भूमिहार एकता मंच"/>
                                    
                                    
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

                    <Col xs={7} className="gap-3 count-3 mossonary">
                    <div>
                        <img src="/images/temp2.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp5.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    
                    <div>
                        <img src="/images/temp2.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp5.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    
                    
                    <div >
                        <img src="/images/temp4.jpg" className=" rounded-4 w-100 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp6.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp7.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp3.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp2.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp5.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                   
                    <div>
                        <img src="/images/temp3.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp3.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp2.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp5.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                   
                    <div>
                        <img src="/images/temp3.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    <div>
                        <img src="/images/temp3.jpg" className="w-100 rounded-4 shadow-bottom"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}