import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";
import { Row, Col } from "antd";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";

import fileApi from "../../api/file";
import queryApi from "../../api/query";
import tagApi from "../../api/tag";

import "./File.scss";

const File = () => {
  let params = useParams();
  let id = params.id;
  const [file, setFile] = useState("");
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState([]);

  const [trails, setTrails] = useState([]);
  const [tags, setTags] = useState([]);

  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResultsCount, setTotalResultsCount] = useState([]);

  const [orderBy, setOrderBy] = useState("score");
  const [arrangeBy, setArrangeBy] = useState("desc");


  useEffect(() => {
    fileApi.getFileById(id).then(res => {
      setFile(res);
    });
    tagApi.getTags({ id }).then(tags => {
      setTags(tags);
    });
  }, []);

  useEffect(() => {
    let pageOffset = currentPage * pageSize;
    sendQueryHandler({ fileId: file.file_id, query, offset: pageOffset, limit: pageSize, orderBy, arrangeBy });
  }, [currentPage, orderBy, arrangeBy]);

  const sendQueryHandler = ({ fileId, query, offset, limit, orderBy, arrangeBy }) => {
    if (file) {
      queryApi.sendQuery({ id: fileId, offset, limit, query, orderBy, arrangeBy }).then(res => {
        setLines(res.data);
        setTotalResultsCount(res.totalResultsCount);
      });
    }
  };

  return (
    <div className="file-wrapper">
      <Row>
        <Col span={6} className="tags-column">
          <FileTags tags={tags} />
        </Col>
        <Col span={12}>
          {/* <input
            className="input-box-search-primary"
            type="search"
            value={[query]}
            onKeyPress={event => {
              if (event.key === "Enter") {
                sendQueryHandler({ fileId: file.file_id, query, offset: currentPage, limit: pageSize, orderBy, arrangeBy });
              }
            }}
            onChange={event => {
              setQuery(event.target.value);
            }}></input> */}

          <div className="lines-list-wrapper">
            <LinesList lines={lines} />

            {/* {lines.length > 0 && (
              <Pagination
                defaultCurrent={currentPage}
                onChange={(page, pageSize) => {
                  setCurrentPage(page - 1);
                  setPageSize(pageSize);
                }}
                pageSize={pageSize}
                total={totalResultsCount}
              />
            )} */}
          </div>
        </Col>
        <Col span={6} className="filter-column">
          <LineFilters />
        </Col>
      </Row>
    </div>
  );
};

export default File;
