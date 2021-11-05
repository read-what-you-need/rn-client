import React from "react";

const bookList = () => {
  return (
    <table className="table table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book</th>
          <th scope="col">Hash</th>
          <th scope="col">Readers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>The World's Greatest Books — Volume 20 </td>
          <td>da39a3ee5e6b4b0d3255bfef95601890afd80709</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Antoine de Saint-Exupéry - The Little Prince [epub]</td>
          <td>b95a464bbcd2da5efb782bfeef2a698895e23595</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>THINK AND GROW RICH - Napoleon Hill</td>
          <td>985bd50fbb9827328086ee1fed35ab6ac25b9418</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
  );
};

export default bookList;
