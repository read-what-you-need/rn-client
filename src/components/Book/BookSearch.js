import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import fileApi from "../../api/file";
import "./BookSearch.scss";

const renderTitle = title => <span>{title}</span>;

const renderItem = item => ({
  value: item.title,
  fileId: item.md5,
  fileSize: item.fileSize,
  label: <span className="book-page-breadcrumb-text">{item.title}</span>
});

const BookSearch = () => {
  const navigate = useNavigate();
  const [bookResults, setBookResults] = useState([]);
  const [searchOpenState, setSearchOpenState] = useState(false);
  useEffect(() => {
    if (bookResults.length > 0) {
      setSearchOpenState(true);
    } else {
      setSearchOpenState(false);
    }
  }, [bookResults]);
  function onEnterHandler(val) {
    if (val) {
      fileApi.queryLibrary({ searchQuery: val }).then(data => {
        setBookResults(data);
      });
    } else {
      setBookResults([]);
    }
  }
  const options = [
    {
      label: renderTitle(bookResults.length > 0 ? `Top ${bookResults?.length} results ` : "No results found"),
      options: bookResults.map(file => renderItem(file))
    }
  ];
  return (
    <div className="book-page-search">
      <AutoComplete
        style={{ width: "100%" }}
        options={options}
        open={searchOpenState}
        onBlur={_e => setSearchOpenState(false)}
        onFocus={_e => setSearchOpenState(true)}
        placeholder="Search here for books that need to be added to the library."
        onSelect={(value, option) => {
          console.log(option);
          let item = option;
          fileApi.fileExplored({ fileId: item.fileId, fileName: value, fileSize: item.fileSize }).then(() => {
            navigate(`/file/${item.fileId}`);
          });
        }}
        onInputKeyDown={e => {
          if (e.keyCode === 13) {
            onEnterHandler(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default BookSearch;
