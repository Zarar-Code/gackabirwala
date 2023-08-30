import React from 'react'

const download = () => {
    const downloadPdf = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/admissionCriteria.pdf';
        window.open(pdfUrl, '_blank');
      };
  return (
    <div>
        <button onClick={downloadPdf}>Download PDF</button>
        </div>
  )
}

export default download