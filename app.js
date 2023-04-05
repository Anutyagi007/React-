import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "NAMASTE REACT");

//JSX

const jsxHeading = <h1 id="heading">JSX Heading</h1>;
console.log(jsxHeading);
// const Title=()=>(
//     <div>
//         Namaste React
//     </div>
// );
// const Title=function(){
//     return(
//         <div>
//             Namaste React
//         </div>
//     )
// }

const title = <div>Hello</div>;
const Heading = () => (
  <>
    <div id="container">
      {title}
      {/* <Title/> */}
      <h1 className="heading">Hello Functional Component</h1>
    </div>
    <div id="container2">
      {title}
      {/* <Title/> */}
      <h1 className="heading">Hello Functional Component</h1>
    </div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
