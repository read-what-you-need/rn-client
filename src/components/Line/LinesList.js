import React from "react";
import { connect } from "react-redux";
import LineItem from "./LineItem";
import { changePage } from "../../actions";

import { Skeleton, Pagination } from "antd";

import "./LinesList.scss";

const multiplySkeleton = byTimes => {
  return (
    <div>
      {[...Array(byTimes).keys()].map(id => (
        <Skeleton key={id} active />
      ))}
    </div>
  );
};

const LinesList = ({ lines, isLoading, changePage, totalResultsCount, pageSize, currentPage }) => {
  return (
    <div className="lines-list">
      {isLoading
        ? multiplySkeleton(5)
        : lines.map(line => {
            return <LineItem key={line.file_line_id} line={line} isSelected={line.selected} feedback={line.feedback} />;
          })}
      <div className="pagination-component">
        {lines.length > 0 && (
          <Pagination
            defaultCurrent={currentPage+1}
            onChange={(page, _pageSize) => {
              changePage({ pageChangeTo: page - 1 });
            }}
            pageSize={pageSize}
            showSizeChanger={false}
            total={totalResultsCount}
          />
        )}
      </div>
    </div>
  );
};
const actionCreators = {
  changePage
};

const mapStateToProps = state => ({
  lines: state.linesWrapper?.linesList || [],
  totalResultsCount: state.linesWrapper?.totalLinesCount,
  pageSize: state.filtersWrapper?.filters?.pageSize,
  currentPage: state.filtersWrapper?.filters?.currentPage,
  isLoading: state.linesWrapper?.isLoading
});

export default connect(mapStateToProps, actionCreators)(LinesList);
