import React from "react";
import { UserIcon } from "../Icons";
import { Link } from "react-router-dom";

import { Menu, Dropdown } from "antd";
const menuOptions = (
  <Menu>
    <Menu.Item>
      <Link key="trail" to={`/books`}>
        <span>Your books</span>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link key="trail" to={`/trail/list`}>
        <span>Your trails</span>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link key="trail" to={`/trail/list`}>
        <span>Logout</span>
      </Link>
    </Menu.Item>
  </Menu>
);
const UserMenu = () => {
  return (
    <Dropdown overlay={menuOptions}>
      <div>
        <UserIcon />
      </div>
    </Dropdown>
  );
};

export default UserMenu;
