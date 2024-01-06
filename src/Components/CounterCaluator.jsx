import React, { useState } from "react";

const CounterCaluator = () => {
  const [data, setData] = useState(0);
  function add() {
    setData(data + 1);
  }
  function sub() {
    if (data > 0) {
      setData(data - 1);
    } else {
      setData(data);
    }
  }
  function Mulit() {
    if (data > 0) {
      setData(data * 2);
    }
  }
  function Reset() {
    setData(0);
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="bg-white  shadow-lg py-5 px-5 rounded-3 position-relative">
          <p className="text-primary text-center">{data}</p>

          <div className="flex align-items-center gap-5">
            <button onClick={add} className="btn btn-primary">
              Add
            </button>
            <button onClick={sub} className="btn btn-primary">
              Sub
            </button>
            <button onClick={Mulit} className="btn btn-primary">
              *
            </button>
            <button
              onClick={Reset}
              className="btn btn-primary fs-6 position-absolute top-0 end-0"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterCaluator;
