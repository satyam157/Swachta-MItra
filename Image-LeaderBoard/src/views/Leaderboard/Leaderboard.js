import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Leaderboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://v1.nocodeapi.com/ayush12gupta/google_sheets/npeXwGzKiseqaTEn?tabId").then((data)=>{
      data.json().then(result=>{
        setData(result.data);
      });
    });
  }, []);

  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Images</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((item, i) => (
              <tr key={i}>
                <td> {i+1} </td>
                <td> {item.Name} </td>
                <td>{item.Email}</td>
                <td> {item.Images} </td>
              </tr>
          ))
          }
        </tbody>
      </table>
        <a href="https://forms.gle/SJWxqoNpt5jGNGgV9">
          <button type="button" class="btn btn-primary btn-lg">
            Make Your Submission
          </button>
        </a>
        <button type="button" class="btn btn-secondary btn-lg">
          Large button
        </button>

      {/* <div className="page-container">
         < User />
        </div> */}
    </>
  )
}

export default Leaderboard;
