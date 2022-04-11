import React from "react";
import "./BookPage.scss";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../Icons";
import BookSearch from "./BookSearch";
import FrequentBooksList from "./FrequentBooksList";

import { Row, Col } from "antd";

const BookExplore = () => {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-breadcrumb">
          <div>
            <Link to={`/profile`}>
              <span className="book-page-breadcrumb-text">Account</span>
            </Link>
          </div>
          <div className="book-page-breadcrumb-icon">
            <RightArrowIcon />
          </div>
          <div>
            <Link to={`/books/explore`}>
              <span className="book-page-breadcrumb-text">Explore Books</span>
            </Link>
          </div>
        </div>
        <div className="book-page-header-wrapper">
          <div className="book-page-header-text">Search books from library </div>
        </div>
        <div className="book-page-search">
          <Row>
            <Col span={16}>
              <BookSearch />
            </Col>
            <Col offset={1} span={6}>
              <FrequentBooksList />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookExplore;
