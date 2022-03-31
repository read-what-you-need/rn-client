import React, { useState } from "react";
import { Input, List, Avatar } from "antd";
import { Link } from "react-router-dom";
import fileApi from "../../api/file";

const BookSearch = () => {
  const [bookResults, setBookResults] = useState([]);
  const [bookResultsLoading, setBookResultsLoading] = useState(false);

  function onEnterHandler(val) {
    setBookResultsLoading(true);
    console.log(val);
    if (val) {
      fileApi.queryLibrary({ searchQuery: val }).then(data => {
        setBookResults(data);
        setBookResultsLoading(false);
      });
    }
  }
  return (
    <div>
      <Input onPressEnter={e => onEnterHandler(e.target.value)} placeholder="Basic search here" />

      <List
        itemLayout="horizontal"
        dataSource={bookResults}
        loading={bookResultsLoading}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://picsum.photos/200/300?random=${index}`} />}
              title={
                <Link to={`/file/${item.md5}`}>
                  <span className="book-page-breadcrumb-text">{item.title}</span>
                </Link>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default BookSearch;
