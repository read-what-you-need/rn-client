import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

import "./UploadButton.scss";

let axiosConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};


const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const [fileHash, setFileHash] = useState([]);

  let pdfToTextEndPoint = process.env.REACT_APP_PDF_TO_TEXT_ENDPOINT;

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

  const onSubmitClickHandler = () => {
    console.log("clicked on submit!");

    const fileData = new FormData();
    fileData.append("hash", fileHash);
    fileData.append("file", selectedFile);

    axios.post(pdfToTextEndPoint, fileData, axiosConfig).then(response => {
      console.log(response.statusText, response.data);
    });

  };

  return (
    <div className="upload-button-wrapper">
      {/* button to add book */}
      <button>
        <input accept=".pdf" type="file" onChange={onSelectFileHandler} id="upload-file" style={{ display: "none" }} />
        <label htmlFor="upload-file">Add book</label>
      </button>

      {/* show submit button only after the file is selected */}
      {selectedFile && <button onClick={onSubmitClickHandler}>Submit</button>}
    </div>
  );
};

export default UploadButton;
