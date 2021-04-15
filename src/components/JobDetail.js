import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const getSingleJob = async () => {
    // let url = `http://localhost:3001/jobs/${id}`;
    let url = `https://github.com/nvak1999/itviec/blob/jobs/${id}/db.json`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default JobDetail;
