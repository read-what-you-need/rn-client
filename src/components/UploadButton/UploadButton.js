import React, { useState } from "react";
import CryptoJS from "crypto-js";

import "./UploadButton.scss";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(false);
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

  const onSubmitClickHandler = () => {
    console.log("clicked on submit!");
  };

  console.log(fileHash, selectedFile);

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
