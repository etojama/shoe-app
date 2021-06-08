import React, { useState } from "react";

export const Contact = ({ contact }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="show">
      <button
        className="show-button"
        id="contact"
        onClick={() => setShow(!show)}
      >
        Click here to contact us
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  return (
    <div className="item">
      <h3>Phone No: +233xxxxxxx</h3> <br />
      <h4>Email: shoes@example.com</h4>
    </div>
  );
};
