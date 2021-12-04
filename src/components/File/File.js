import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, createSearchParams, useNavigate } from "react-router-dom";

import { Pagination } from "antd";
import { Timeline } from "antd";
import { Row, Col } from "antd";

import LineItem from "../Line/LineItem";
import LineFilters from "../Line/LineFilters";
import fileApi from "../../api/file";
import queryApi from "../../api/query";
import "./File.scss";

const File = () => {
  let params = useParams();

  let id = params.id;

  const [file, setFile] = useState("");
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState([]);

  const [trails, setTrails] = useState([]);

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResultsCount, setTotalResultsCount] = useState([]);

  const [orderBy, setOrderBy] = useState("score");
  const [arrangeBy, setArrangeBy] = useState("desc");

  /* Fetch file information on page load */
  useEffect(() => {
    fileApi.getFileById(id).then(res => {
      setFile(res);
    });
  }, []);

  /* Fetch latest changes if current page or filter change */
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

  const addTrailHandler = trail => {
    console.log(`file line id is: ${trails}`);
    setTrails([...trails, trail]);
  };
  return (
    <div className="file-wrapper">
      <Row>
        <Col span={7}></Col>
        <Col span={12}>
          <div className="file-legend-info">
            <span>Name: {file?.name}</span>
            <span>Processed: {file.processed?.toString()}</span>
          </div>
          <input
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
            }}></input>

          <div className="lines-table-wrapper">
            {lines.map(line => {
              return <LineItem key={line.file_line_id} line={line} addTrailHandler={addTrailHandler} />;
            })}
          </div>
          {lines.length > 0 && (
            <Pagination
              defaultCurrent={currentPage}
              onChange={(page, pageSize) => {
                setCurrentPage(page - 1);
                setPageSize(pageSize);
              }}
              pageSize={pageSize}
              total={totalResultsCount}
            />
          )}
        </Col>
        <Col span={5}>
          <div className="lines-filter-dash">
            <LineFilters orderByChange={setOrderBy} arrangeByChange={setArrangeBy} />
          </div>
          {trails.length !== 0 && (
            <Link to={`/r/trail`} state={{ trails, file, query }}>
              Reviews Trails <sup>{trails.length}</sup>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default File;
