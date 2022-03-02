import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { onLineSelect } from "../../actions";
import { Badge } from "antd";

const LineItem = ({ line, onLineSelect, isSelected, feedback }) => {
  return (
    <div className={`line-item ${isSelected ? "selected" : ""}`} onClick={() => onLineSelect({ line })}>
      <div className="line-item-text">{line.line}</div>
      <Badge color={feedback === 1 ? "green" : feedback === -1 ? "red" : ""}></Badge>
    </div>
  );
};

const mapStateToProps = state => ({});
const actionCreators = { onLineSelect };
export default connect(mapStateToProps, actionCreators)(LineItem);
