import React, { useState } from "react";

const FormValidacation = () => {
  const [inputData, setInputData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    Number: "",
  });

  const inputControl = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({
      Name: "",
      LastName: "",
      Email: "",
      Password: "",
      Number: "",
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-blue-300">
        <div className="container max-w-[1320px] mx-auto px-3">
          <h2 className="text-white text-center text-[48px] font-black">
            Form Validacation
          </h2>
          <div className="max-w-[500px] mx-auto">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                onChange={inputControl}
                type="text"
                placeholder="Name"
                name="Name"
                className="outline-none px-2 py-2 rounded-[10px]"
                value={inputData.Name}
              />
              <input
                onChange={inputControl}
                type="text"
                placeholder="Last Name"
                name="LastName"
                className="outline-none px-2 py-2 rounded-[10px]"
                value={inputData.LastName}
              />
              <input
                onChange={inputControl}
                type="email"
                placeholder="Email"
                name="Email"
                className="outline-none px-2 py-2 rounded-[10px]"
                value={inputData.Email}
              />
              <div className="rounded-[20px] ">
                <input
                  onChange={inputControl}
                  type="password"
                  placeholder="Password"
                  name="Password"
                  className="outline-none px-2 py-2 rounded-[10px]"
                  value={inputData.Password}
                />
              </div>
              <input
                onChange={inputControl}
                type="number"
                placeholder="Number"
                name="Number"
                className="outline-none px-2 py-2 rounded-[10px]"
                value={inputData.Number}
              />
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 rounded-[20px] text-white "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidacation;
