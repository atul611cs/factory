import React from 'react';
import styles from './Downloads.module.css';

const Downloads = () => {
  return (
    <div className={styles.container}>
      <h2>Downloads</h2>
      <p>You can view or download our product catalog below:</p>

      <div className={styles.pdfViewer}>
        <iframe
          src="/catalog.pdf"
          width="100%"
          height="600px"
          title="Product Catalog"
        ></iframe>

        <a href="/catalog.pdf" download className={styles.downloadBtn}>
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Downloads;
