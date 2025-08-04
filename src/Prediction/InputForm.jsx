import React, { useState } from "react";
//import axios from "axios";
const InputForm = () => {
  const [features, setFeatures] = useState({
    Area: "",
    Room: "",
    Warehouse: "",
    Parking: "",
  });
  const [result, setResult] = useState("");
  const handlechange = (e) => {
    setFeatures({ ...features, [e.Target.name]: e.Target.vale });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const values = Object.values(features).map(Number);
    try {
      //const res = await axios.post("http://localhost:5000/predict", {
      // features: values,
      // });
      //setResult(res.data.prediction);
    } catch (err) {
      console.error(err);
      setResult("Error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Area"
          placeholder="Area"
          onChange={handlechange}
        />
        <input
          type="text"
          name="Room"
          placeholder="Room"
          onChange={handlechange}
        />
        <input
          type="text"
          name="warehouse"
          placeholder="warehouse"
          onChange={handlechange}
        />
        <input
          type="text"
          name="parking"
          placeholder="Parking"
          onChange={handlechange}
        />
        <button type="submit">predict</button>
      </form>
      {result && <h3>Prediction:{result}</h3>}
    </div>
  );
};

export default InputForm;
