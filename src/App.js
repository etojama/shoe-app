import "./App.css";
import { data } from "./data";
import React, { useState } from "react";
import { Signup } from "./Signup";
import { Contact } from "./Contact";
import { Shoes } from "./Shoes";
import { Categories } from "./Categories";

const alls = ["All", ...new Set(data.map((d) => d.category))];
console.log(alls);

function App() {
  const [shoeLists, setShoelists] = useState(data);
  const [categories, setCategories] = useState(alls);

  const filterItems = (category) => {
    if (category === "All") {
      setShoelists(data);
      return;
    }
    const newShoes = data.filter((a) => a.category === category);
    setShoelists(newShoes);
  };

  return (
    <div id="top" className="app">
      <div className="header">
        <h2 className="title">BRAZZY FOOTIES</h2>
        <p id="pw">
          Wont you rather shoe up with us? The highest quality{" "}
          <span style={{ color: "darkSalmon" }}>footwears</span> are here!
        </p>
        <br />

        <a href="#contact">Contact us</a>
      </div>
      <br />
      <Categories
        categories={categories}
        filterItems={filterItems}
        id="contact"
      />

      <div className="underline"></div>
      <br />
      <Shoes shoeLists={shoeLists} />
      <br />
      <br />
      <Signup />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <a href="#top">Back to top</a>
    </div>
  );
}

export default App;
