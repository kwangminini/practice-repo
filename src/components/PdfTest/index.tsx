import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { DocumentCallback } from "react-pdf/dist/cjs/shared/types";
import styled from "@emotion/styled";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface IPdf {
  numPages: number;
}
export default function PdfTest() {
  const [file, setFile] = useState<File>();
  const [pdf, setPdf] = useState<IPdf>();

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleLoadSuccess = (pdf: DocumentCallback) => {
    const { numPages } = pdf;
    setPdf({ numPages });
  };

  return (
    <>
      <input type="file" onChange={handleUploadFile} />
      {file && (
        <Document file={file} onLoadSuccess={handleLoadSuccess}>
          <PdfWrapper>
            {pdf &&
              Array.from(Array(pdf.numPages)).map((_, idx) => {
                return (
                  <Page
                    pageNumber={idx}
                    key={idx}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={3}
                  />
                );
              })}
          </PdfWrapper>
        </Document>
      )}
    </>
  );
}

const PdfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
