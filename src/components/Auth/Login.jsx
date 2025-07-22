import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-600 rounded-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-3 px-20 py-40"
        >
          <input
            required
            className="border-2 border-emerald-600 py-2 px-3 rounded-full text-xl outline-none bg-transparent"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            required
            className="border-2 border-emerald-600 py-2 px-3 rounded-full text-xl outline-none bg-transparent"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          {console.log(email,password)}
          <button
            className="w-full py-2 px-3 rounded-full text-xl outline-none bg-emerald-600 cursor-pointer"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
