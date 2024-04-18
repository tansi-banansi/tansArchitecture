import { Col, Container, Row, Image, Modal } from "react-bootstrap";
import imageAttributes from '../utilities/imageAttributes'
import { useState } from "react";


function ImageGallery() {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false)
  }


  return (
    <Container fluid className="gx-0">
      <Row className="align-items-stretch">
        {imageAttributes.map(image => {
          return( 
            <Col xs={image.xs} sm={image.sm} md={image.md} lg={image.lg} style={{ maxHeight: '30vh' }} className="g-1">
              <Image src={image.path} className="img-fluid w-100 h-100 object-fit-cover" onClick={() => handleImageClick(image)} alt={image.alt} />
            </Col>
          )
        })}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <img src={selectedImage?.path} className="img-fluid" alt="Selected Image" />
        </Modal.Body>
      </Modal>

    </Container>
  );
}

export default ImageGallery;
