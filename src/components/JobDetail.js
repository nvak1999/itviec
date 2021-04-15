import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbarr from "./Navbarr";

const JobDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  const getSingleJob = async () => {
    // let url = `http://localhost:3001/jobs/${id}`;
    let url = `https://my-json-server.typicode.com/nvak1999/itviec/jobs/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <div className="jobdetail-body">
      <Navbarr />
      <div className="jobdetail">
        <div className="imgJob">
          <img src={data.img} alt="" />
        </div>
        <div className="jobdetail2">
          <h1>{data.title}</h1>
          <div className="detail-tags2">
            {data &&
              data.tags.map((item) => {
                return <p>{item}</p>;
              })}
          </div>
          <p>$ {data.salary}</p>
          <p>
            {data.city} District {data.district}
          </p>
          <h2>Benefit</h2>
          <ul>
            {data &&
              data.benefits.map((a) => {
                return <li>{a}</li>;
              })}
          </ul>
          <h2>Description</h2>
          <p>{data.description}</p>

          <button className="apply-button">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
