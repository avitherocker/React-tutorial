import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function About() {
  const [counter, setCounter] = useState(0);

  const [obj, setObj] = useState({});

  const params=useParams();

  console.log(params);

  const navigate = useNavigate();
  //console.log("xc", navigate);

  const clickMe = (e) => {
    e.preventDefault();
    let count = counter;
    count++;
    setCounter(count);
    // navigate("/faq");
  };

  //componentDidMount ,componentDidupdate

  useEffect(() => {
    console.log("sdsddsds");
  }, []);

  useEffect(() => {
    console.log("2");
  }, [counter]);

  return (
    <div>
      <button onClick={(e) => clickMe(e)}>Click Me</button>

      <div>{counter}</div>
    </div>
  );
}
