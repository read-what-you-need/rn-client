import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fileApi from "../../api/file";
import { Avatar, Table } from "antd";

const columns = [
  {
    title: "",
    dataIndex: "",
    key: "",
    render: (_text, record, index) => {
      console.log(record);
      return <Avatar src={`https://picsum.photos/100/100?random=${index}`} />;
    }
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_text, record) => {
      return <Link to={`/file/${record.file_id}`}>{record.name}</Link>;
    }
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    render: (_text, record) => {
      const fileCreatedAt = new Date(record.created_at).toLocaleDateString("en-US", dateFormatOptions);
      return fileCreatedAt;
    }
  }
];
const dateFormatOptions = { hour: "2-digit", minute: "2-digit", weekday: "long", year: "numeric", month: "long", day: "numeric" };

const BooksPlatform = () => {
  const [platformBooks, setPlatformBooks] = useState([]);

  useEffect(() => {
    fileApi.getProcessedPlatformFiles().then(({ data }) => {
      setPlatformBooks(data);
    });
  }, []);
  return <Table columns={columns} dataSource={platformBooks} />;
};

export default BooksPlatform;