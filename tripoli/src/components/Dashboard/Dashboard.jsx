import React from "react";
import "./Dash.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard({ api }) {
  if (!api || api.length === 0) {
    return <div>No data available.</div>;
  }
  const keys = Object.keys(api[0]);
  return (
    <main id="siteMain">
      <div className="container">
        <div className="boxNav dFlex justifyBewteen">
          <Link to="/admin/tours/add" className="borderShadow">
            <span className="textGradient">
              New Tour <i className="fa-solid fa-user"></i>
            </span>
          </Link>
        </div>
        <form action="/admin/tours" method="POST">
          <table className="table">
            <thead className="theadDark">
              <tr>
                {keys.map((element, index) => {
                  return <th key={index}>{element}</th>;
                })}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {api.map((element, index) => {
                return (
                  <tr key={index}>
                    {keys.map((key) => (
                      <td key={key}>{element[key]}</td>
                    ))}
                    <td>
                      <Link
                        // /admin/update/:id
                        to={`/admin/tours/update/${element.id}`}
                        className="btn borderShadow update"
                      >
                        <span className="textGradient">
                          <i className="fas fa-pencil-alt"></i>
                        </span>
                      </Link>
                      <a
                        onClick={async () => {
                          let response = await axios.delete(
                            `http://localhost:4000/tours/delete/${element.id}`
                          );
                          console.log("deleted " + response.data);
                        }}
                        // to={`/admin/tours/delete/${element.id}`}
                        className="btn borderShadow delete"
                      >
                        <span className="text-gradient">
                          <i className="fas fa-times"></i>
                        </span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </main>
  );
}

export default Dashboard;
