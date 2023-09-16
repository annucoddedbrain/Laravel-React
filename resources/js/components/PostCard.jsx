import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MdComment, MdShare, MdThumbUp, MdSend } from "react-icons/md";


function PostCard({ post }) {

    const [ placeHide, setPlaceHide] = React.useState( false );

    const wrapParagraph =  function(){
        console.log( this );
    }

    const hidePlaceholder = function( event ){
        if( event.target.innerText.length > 0 ){
            setPlaceHide( true )
        }
        else{
            setPlaceHide( false )
        }
    }

    return (

        <Card>
            <Card.Header>
                <Row>
                    <Col xs={10}>
                        <Row>
                            <Col xs={3}>
                                <div className="profile-image">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={7} className="d-flex align-items-center">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h5 className="profile-name mb-1">{post.author.name}</h5>
                                    <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@{post.author.username}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Card.Header>

            <Card.Body>

                <div className="post-body m-1 p-3 border rounded-2">
                    {post.content}
                </div>

            </Card.Body>

            <Card.Footer className="border-0 bg-transparent">

                <Row className="border-top border-bottom m-0">
                    <Col xs={4} className="text-center">
                        <button className="btn"><MdThumbUp /> Like</button>
                    </Col>
                    <Col xs={4} className="text-center">
                        <button className="btn" onClick={()=>{ document.querySelector('.comment-input').focus()}}><MdComment /> Comment</button>
                    </Col>
                    <Col xs={4} className="text-center">
                        <button className="btn"><MdShare /> Share</button>
                    </Col>
                </Row>
                <Row>


                    <Col xs={10}>
                        <div className="comment-box border">
                            <div className="comment-writer">
                                <div contentEditable={true} className="comment-input" onInput={hidePlaceholder}  aria-label="Write a Comment...">
                                </div>
                                <div className={`comment-placeholder ${placeHide == true ? 'd-none': ''}`}>Write a comment...</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} className="mt-3">
                        <MdSend/>
                    </Col>

                </Row>

            </Card.Footer>
        </Card>
    )
}

export default PostCard;
