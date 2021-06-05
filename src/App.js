import "./App.css";
import { data } from "./data";
import React, { useState, useEffect } from "react";
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
    <div className="App">
      <h2>SHOEING</h2>
      <p>Wont you rather shoe with us? </p>
      <Categories categories={categories} filterItems={filterItems} />
      <Shoes shoeLists={shoeLists} />
      <Signup />
      <Contact />
    </div>
  );
}

export default App;
