import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import logo1 from "../../Assets/lingesh-1.png";
import logo2 from "../../Assets/lingesh-2.png";
import logo3 from "../../Assets/lingesh-3.png";
import pdf from "../../Assets/../Assets/lingeshwaran.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/18pIMFUVVYKCG_HwCRX4T1JSjDSKl94F-/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
<Row>
<img src={logo1} style={{width:"70%",marginLeft:"17%",marginTop:"2%",marginBottom:"2%"}} alt="Logo" />
<img src={logo2} style={{width:"70%",marginLeft:"17%",marginTop:"2%",marginBottom:"2%"}} alt="Logo" />
<img src={logo3} style={{width:"70%",marginLeft:"17%",marginTop:"2%",marginBottom:"2%"}} alt="Logo" />;
</Row>
        

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
