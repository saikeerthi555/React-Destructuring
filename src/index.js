import animals from "./data.js";

console.log(animals);

//destructuring Arrays
const [cat, dog] = animals;
//console.log(cat);

//destructuring a object
// const {name, sound} = cat;
// const { name: catName, sound: catSound } = cat;
//const {name = "Fluffy", sound = "purr"} = cat;
//destructuring a nested object then
// const {
//   name,
//   sound,
//   feedingRequirements: {food, water }
// } = cat;

// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
