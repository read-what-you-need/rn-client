import React, { useEffect, useState } from "react";
import fileApi from "../../api/file";
import { Link } from "react-router-dom";

import { List, Avatar } from "antd";
import "./FrequentBooksList.scss";
const FrequentBooksList = () => {
  const [popularFiles, setPopularFiles] = useState([]);

  useEffect(() => {
    fileApi.getPopularFiles().then(files => {
      setPopularFiles(files.slice(0, 10));
    });
  }, []);
  return (
    <div className="frequent-book-list">
      <div className="book-page-header-wrapper">
        <div className="book-page-header-text">Trending books</div>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={popularFiles}
        renderItem={(item, index) => (
          <Link to={`/file/${item.fileId}`}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://picsum.photos/200/300?random=${index}`} />}
                title={item.name}
                description={`Checked ${item.score} times`}
              />
            </List.Item>
          </Link>
        )}
      />
    </div>
  );
};

export default FrequentBooksList;
