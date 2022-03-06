import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const [list, setList] = useState([]);
  let history = useHistory();

  //#### fetching all data at loading time
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div>
      <p>Home</p>
      <div className="row">
        <div className="col-sm-6">
          <table className="table table-hover">
            <tr>
              <th>SrNo. </th>
              <th>Title </th>
              <th>PostText </th>
              <th> UserName</th>
            </tr>

            {list.map((val, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() => {
                      history.push(`/post/${val.id}`);
                    }}
                  >
                    {val.id}
                  </td>
                  <td>{val.title}</td>
                  <td>{val.postText}</td>
                  <td>{val.userName}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
