import React, { useState } from "react";
import CryptoJS from "crypto-js";

import fileApi from "../../api/file";
import { UploadIcon } from "../Icons";

import "./UploadButton.scss";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const [fileHash, setFileHash] = useState([]);

  const [buttonStatus, setButtonStatus] = useState([]);

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
    setButtonStatus("Checking if file exists in the database...");
    fileApi.checkFileExists({ hash: fileHash }).then(({ exist }) => {
      if (!exist) {
        setButtonStatus("Unique file detected. Uploading...");
        fileApi.addFileToS3({ hash: fileHash, file: selectedFile }).then(({ upload }) => {
          if (upload) {
            setButtonStatus("Upload successful. Saving upload metadata in the database..");
            fileApi.addFileRecordInDb({ hash: fileHash, file: selectedFile }).then(result => {
              setButtonStatus("File record saved. Upload successful!");
            });
          } else {
            setButtonStatus("Upload unsuccessful");
          }
        });
      } else {
        setButtonStatus("File exists in our database.");
      }
    });
  };

  return (
    <div className="upload-button-wrapper">
      {/* button to add book */}
      <button className="push-button primary">
        <UploadIcon />
        <input accept=".pdf" type="file" onChange={onSelectFileHandler} id="upload-file" style={{ display: "none" }} />
        <label htmlFor="upload-file">Upload</label>
      </button>

      {/* show submit button only after the file is selected */}
      {selectedFile && <button onClick={onSubmitClickHandler}>Submit</button>}

      {buttonStatus}
    </div>
  );
};

export default UploadButton;
