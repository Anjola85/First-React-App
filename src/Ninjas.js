// ****UI COMPONENT****
import React from "react";
import "./Ninjas.css";

// the function Ninjas will recieve props as parameter although i will replace props with {ninjas} for destructuting purposes
const Ninjas = ({ ninjas, deleteNinja }) => {
  // store new array full of html elements in ninjaList
  //   using ternary operator
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        {/* implementing an ANONYMOUS FUNCTION so deleteNinja is not authomatically called but instead only works when the button is clicked */}
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninja
        </button>
      </div>
    ) : null;
  });

  //   also can output directly in the template instead of assigning it to a variable ninjaList
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
