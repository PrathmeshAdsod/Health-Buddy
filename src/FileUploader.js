import React, { useState } from 'react';
import './FileUploader.css';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // In a real application, you would send the file to the server for storage and handle the response.
    // Here, we'll just log the file details.
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
    }
  };

  return (
    <div className="file-uploader">
      <h2>File Uploader</h2>
      <input
        type="file"
        accept="image/*, audio/*, video/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Share File
      </button>
      {selectedFile && (
        <p>Selected File: {selectedFile.name}</p>
      )}
    </div>
  );
};

export default FileUploader;
