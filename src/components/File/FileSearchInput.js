import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import queryApi from "../../api/query";

import { searchQueryRequest } from "../../actions";
import { Input, AutoComplete } from "antd";
import "./FileSearchInput.scss";

const renderTitle = title => <span>{title}</span>;
const renderItem = (title, _count) => ({
  value: title,
  label: <div>{title}</div>
});

const FileSearchInput = ({ searchRequest, fileId, query }) => {
  const [topSearches, setTopSearches] = useState([]);
  const [searchOpenState, setSearchOpenState] = useState(false);
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
  const searchHandler = query => {
    searchRequest({ query });
    setSearchOpenState(false);
  };
  return (
    <div className="file-input-search">
      <AutoComplete
        style={{ width: "100%" }}
        options={options}
        open={searchOpenState}
        onFocus={_e => setSearchOpenState(true)}
        onBlur={_e => setSearchOpenState(false)}
        onSelect={(value, _option) => {
          searchHandler(value);
        }}
        onInputKeyDown={e => {
          if (e.keyCode === 13) {
            searchHandler(query);
          }
        }}>
        <Input.Search
          onSearch={(value, _event) => {
            searchHandler(value);
          }}
          size="large"
          placeholder="Ask your questions here I’ll find the answer!"
        />
      </AutoComplete>
    </div>
  );
};

const mapStateToProps = state => ({
  query: state.filtersWrapper.filters.query,
  fileId: state.filtersWrapper.filters.fileId,
  checkedOutTrailsCount: state.trailsWrapper.trails.length
});

const actionCreators = {
  searchRequest: searchQueryRequest
};
export default connect(mapStateToProps, actionCreators)(FileSearchInput);
