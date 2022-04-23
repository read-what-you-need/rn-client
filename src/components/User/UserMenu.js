import React from "react";
import { connect } from "react-redux";
import { UserIcon } from "../Icons";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions";
import "./UserMenu.scss";
import { Menu, Dropdown } from "antd";
const menuOptions = ({ logoutUser }) => (
  <Menu>
    <Menu.Item key="1">
      <Link key="profile" to={`/profile`}>
        <span>Your Profile</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link key="books" to={`/books`}>
        <span>Your Books</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link key="trail" to={`/trail/list`}>
        <span>Your Trails</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link
        to={`/`}
        onClick={() => {
          logoutUser();
        }}>
        <span>Logout</span>
      </Link>
    </Menu.Item>
  </Menu>
);
const UserMenu = ({ logoutUser }) => {
  return (
    <Dropdown overlayClassName="user-menu" overlay={menuOptions({ logoutUser })}>
      <div>
        <UserIcon />
      </div>
    </Dropdown>
  );
};

const mapStateToProps = state => ({});

const actionCreators = { logoutUser };
export default connect(mapStateToProps, actionCreators)(UserMenu);
