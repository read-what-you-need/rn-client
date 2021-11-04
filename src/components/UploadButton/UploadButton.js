import React, { useState } from "react";
import CryptoJS from "crypto-js";

import "./UploadButton.scss";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileHash, setFileHash] = useState([]);

  const onSelectFileHandler = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function (evt) {
      if (evt.target.readyState === FileReader.DONE) {
        var wordArray = CryptoJS.lib.WordArray.create(evt.target.result);
        var hash = CryptoJS.SHA256(wordArray).toString();
        setFileHash(hash);
      }
    };
    reader.readAsArrayBuffer(file);
    setSelectedFile(event.target.files[0]);
  };

  console.log(fileHash, selectedFile)

  return (
    <div className="upload-button-wrapper">
      <button>
        <input accept=".pdf" type="file" onChange={onSelectFileHandler} id="upload-file" style={{ display: "none" }} />
        <label htmlFor="upload-file">Add book</label>
      </button>
    </div>
  );
};

export default UploadButton;
