import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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

  console.log(trails);
  useEffect(() => {
    if (file) {
      queryApi
        .sendQuery({ id: file.file_id, query, offset: currentPage * pageSize, limit: pageSize, orderBy: orderBy, arrangeBy: arrangeBy })
        .then(res => {
          setLines(res.data);
          setTotalResultsCount(res.totalResultsCount);
        });
    }
  }, [currentPage, orderBy, arrangeBy]);

  useEffect(() => {
    fileApi.getFileById(id).then(res => {
      setFile(res);
    });
  }, []);

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
            onKeyPress={event => {
              if (event.key === "Enter") {
                console.log(`pressed enter: ${query}`);
                queryApi.sendQuery({ id: file.file_id, offset: 0, limit: pageSize, query, orderBy: orderBy, arrangeBy: arrangeBy }).then(res => {
                  setLines(res.data);
                  setTotalResultsCount(res.totalResultsCount);
                });
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
              onChange={(page, pageSize) => {
                setCurrentPage(page - 1);
                setPageSize(pageSize);
              }}
              defaultCurrent={0}
              pageSize={pageSize}
              total={totalResultsCount}
            />
          )}
        </Col>
        <Col span={5}>
          <div className="lines-filter-dash">
            <LineFilters orderByChange={setOrderBy} arrangeByChange={setArrangeBy} />
          </div>
          <div className="trail-lines-review">
            <h3 className="trail-lines-add">Added trail lines</h3>
            <div className="trail-lines-items">
              <Timeline>
                {trails.map((trailLines, idx) => {
                  return (
                    <div className="trail-line-item" key={trailLines.file_line_id}>
                      <Timeline.Item>
                        {idx + 1}.{trailLines.line?.substring(0, 50)}...
                      </Timeline.Item>
                    </div>
                  );
                })}
              </Timeline>
            </div>

            {trails.length !== 0 && (
              <Link to={`/r/trail`} state={{ trails, file }}>
                Reviews Trails <sup>{trails.length}</sup>
              </Link>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default File;
