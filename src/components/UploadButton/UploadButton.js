import React, { useState } from "react";
import CryptoJS from "crypto-js";

import fileApi from "../../api/file";
import { UploadIcon } from "../Icons";
import { Button, notification } from "antd";

import "./UploadButton.scss";

const UploadButton = () => {
  const openNotification = (description, type = "info") => {
    notification[type]({
      message: "Upload status",
      description,
    });
  };

  const onSelectFileHandler = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    let hash = [];
    reader.onloadend = function (evt) {
      if (evt.target.readyState === FileReader.DONE) {
        var wordArray = CryptoJS.lib.WordArray.create(evt.target.result);
        hash = CryptoJS.SHA256(wordArray).toString();
        uploadHandler({ selectedFile: event.target.files[0], fileHash: hash });
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const uploadHandler = ({ selectedFile, fileHash }) => {
    fileApi.checkFileExists({ hash: fileHash }).then(({ exist }) => {
      if (!exist) {
        openNotification("Unique file detected. Uploading...");
        fileApi.addFileToS3({ hash: fileHash, file: selectedFile }).then(({ upload }) => {
          if (upload) {
            openNotification("Upload successful.", "success");
            fileApi.addFileRecordInDb({ hash: fileHash, file: selectedFile }).then(_result => {
              openNotification("Handing over file to Rastero for processing", "success");
            });
          } else {
            openNotification("Upload unsuccessful", "error");
          }
        });
      } else {
        openNotification("File already exists in our database.", "warn");
      }
    });
  };

  return (
    <div className="upload-button-wrapper">
      <button className="push-button primary">
        <UploadIcon />
        <input accept=".pdf" type="file" onChange={onSelectFileHandler} id="upload-file" style={{ display: "none" }} />
        <label htmlFor="upload-file">Upload</label>
      </button>
    </div>
  );
};

export default UploadButton;
