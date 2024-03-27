import React, { useState } from 'react';
import './App.css';

const FileHandlingApp = () => {
  const [file, setFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setShowPreview(false); // Hide preview when a new file is selected
  };

  const handleFileUpload = () => {
    if (file) {
      // You can perform additional actions here (e.g., send the file to a server)
      console.log('File uploaded:', file);
      setShowPreview(true); // Show preview after uploading
    } else {
      console.log('Please select a file first.');
    }
  };

  const handleFileDownload = () => {
    if (file) {
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger a click to download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();

      // Remove the link from the DOM
      document.body.removeChild(link);

      // Revoke the object URL to free up memory
      URL.revokeObjectURL(url);
    } else {
      console.log('No file to download.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">File Handling App</h1>
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleFileUpload}>Upload File</button>
      <button onClick={handleFileDownload}>Download File</button>
      {showPreview && (
        <div>
          <h3>File Preview</h3>
          {file.type.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(file)}
              alt="File Preview"
              className="preview-image"
            />
          ) : (
            <p>This file type cannot be previewed.</p>
          )}
        </div>
      )}
      <div className="watermark">
        <p>abhinay</p>
      </div>
    </div>
  );
};

export default FileHandlingApp;