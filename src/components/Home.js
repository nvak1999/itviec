import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbarr from "./Navbarr";

const Home = () => {
  const [jobList, setjobList] = useState([]);
  let history = useHistory();
  const getJobs = async () => {
    let url = ` http://localhost:3001/jobs`;
    const res = await fetch(url);
    const data = await res.json();
    setjobList(data);
    console.log(data);
  };

  useEffect(() => {
    getJobs();
  }, []);
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <Navbarr />
      <h1> 6 IT jobs in Vietnam/Home Page</h1>
      <div className="home">
        <div className="container">
          {jobList.map((item) => {
            return (
              <Link style={{ textDecoration: "none" }} to={`/jobs/${item.id}`}>
                <div className="job-content">
                  <img src={item.img} alt="" />
                  <div>
                    <h2>{item.title}</h2>

                    <p className="salary">$ {item.salary}</p>
                    <div className="detail">
                      <ul>
                        {item.benefits.map((a) => {
                          return <li>{a}</li>;
                        })}
                      </ul>
                      <div className="detail-tags">
                        {item.tags.map((a) => {
                          return <p>{a}</p>;
                        })}
                      </div>
                    </div>

                    <p>
                      district {item.district} , {item.city} city
                    </p>

                    <p className="hot">{item.isHotjob ? "Hot Job" : ""}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
