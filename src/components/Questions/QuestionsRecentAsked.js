import React from "react";
import { connect } from "react-redux";
import {} from "../../actions";
import "./QuestionsRecentAsked.scss";
import { Tag, Timeline } from "antd";
const QuestionsRecentAsked = ({ questionsAsked }) => {
  return (
    <div className="questions-recent-asked">
      <div className="questions-recent-asked-header">Recent questions</div>
      <div className="questions-recent-asked-list">
        <Timeline>
          {questionsAsked.slice(-4).map(question => {
            return (
              <Timeline.Item>
                <div className="questions-recent-asked-list-item">
                  {question.question}
                  <div>
                    <Tag>{question.askedAt}</Tag>
                  </div>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ questionsAsked: state.questionsWrapper.questionStack });

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(QuestionsRecentAsked);
