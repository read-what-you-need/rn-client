import React from "react";
import "./BookPage.scss";
import BookSearch from "./BookSearch";
import BooksPlatform from "./BooksPlatform";
import FrequentBooksList from "./FrequentBooksList";

import { Row, Col } from "antd";

const BookExplore = () => {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-explore">
          <Row>
            <Col span={16}>
              <div className="book-page-explore-section">
                <div>
                  <div className="book-page-header-wrapper">
                    <div className="book-page-header-text">Request books in library </div>
                  </div>
                  <BookSearch />
                </div>
                <div>
                  <div className="book-page-header-wrapper">
                    <div className="book-page-header-text">Books already in library </div>
                  </div>
                  <BooksPlatform />
                </div>
              </div>
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
