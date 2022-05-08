import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import queryApi from "../../api/query";

import { searchQueryRequest, searchQueryType } from "../../actions";
import { AutoComplete } from "antd";

const renderTitle = title => <span>{title}</span>;

const renderItem = (title, count) => ({
  value: title,
  label: <div>{title}</div>
});

const FileSearchInput = ({ searchRequest, fileId, query, searchQueryType }) => {
  const [topSearches, setTopSearches] = useState([]);
  useEffect(() => {
    if (fileId) {
      queryApi.getPopularQueryForFile({ fileId }).then(res => setTopSearches(res));
    }
  }, [fileId]);
  const options = [
    {
      label: renderTitle("Here are some frequently asked questions."),
      options: topSearches.map(searchQuery => renderItem(searchQuery.query, searchQuery.score))
    }
  ];
  return (
    <AutoComplete
      style={{ width: "100%" }}
      options={options}
      placeholder="Ask any question. I’ll will find the answer!"
      onChange={value => {
        searchQueryType({ query: value });
      }}
      onSelect={(value, _option) => {
        searchQueryType({ query: value });
        searchRequest({ query: value });
      }}
      onInputKeyDown={e => {
        if (e.keyCode === 13) {
          searchRequest({ query });
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  query: state.filtersWrapper.filters.query,
  fileId: state.filtersWrapper.filters.fileId,
  checkedOutTrailsCount: state.trailsWrapper.trails.length
});

const actionCreators = {
  searchRequest: searchQueryRequest,
  searchQueryType
};
export default connect(mapStateToProps, actionCreators)(FileSearchInput);
