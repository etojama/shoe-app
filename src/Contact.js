import React, { useState } from "react";

export const Contact = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Contact us</button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  return (
    <div>
      <h4>Phone No: +233xxxxxxx</h4>
      <h5>Email: shoes@example.com</h5>
    </div>
  );
};
