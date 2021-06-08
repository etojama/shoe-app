import React, { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const detail = { name, email };
      setDetails((details) => {
        return [...details, detail];
      });
      setName("");
      setEmail("");
    } else {
      console.log("empty");
    }
  };

  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name=""
          id="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br />
        <button className="sign-button">Sign Up</button>
      </form>
    </div>
  );
};
