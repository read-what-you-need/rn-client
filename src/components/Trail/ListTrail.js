import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import trailApi from "../../api/trail";

const ListTrail = () => {
  const [trails, setTrails] = useState([]);
  useEffect(() => {
    trailApi.listUserTrails({ offset: 0, limit: 15 }).then(res => {
      setTrails(res);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>My trails</h1>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/feed`}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/user`}>Profile</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Trail</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/trail/list`}>My trails</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-hover mt-5 table-sm">
              <thead>
                <tr>
                  <th scope="col">#Trail id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Your Visits</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Public Visits</th>
                </tr>
              </thead>
              <tbody>
                {trails.map((trail, index) => {
                  return (
                    <tr key={trail.trail_id}>
                      <th scope="row">{trail.trail_id}</th>
                      <td>
                      <Link to={`/trail/${trail.trail_id}`}>{trail.title}</Link>
                      </td>
                      <td>
                       {trail.visited}
                      </td>
                      <td>{trail.created_at}</td>
                      <td>{trail.public_visits}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ListTrail;
