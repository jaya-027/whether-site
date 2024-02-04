import React from "react";
import "./Show.css";

export const Show = (props) => {
  return (


    <div className="container absolute top-40 flex flex-col w-full justify-center font-semibold">
          <h1 className="h-10 text-center text-3xl font-mono tc">{props.cityname}</h1>

          <h5 className="">
          
          </h5>

         
          {props.temp_celsius ? (
            <h1 className="h-6 text-center text-1xl font-mono tc p-3 my-5">{props.temp_celsius}&deg;</h1>
          ) : null}

          {/* show max and min temp */}

          
          {maxminTemp(props.temp_min, props.temp_max)}

          {/* Weather description */}


          <h2 className="h-5 text-center text-1xl font-mono tc p-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h2>


        
      </div>
    
  );
};
function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 className="h-10 flex flex-col text-center text-1xl font-mono tc p-5 my-10">
        <span className="px-4">Min Temerature: {min}&deg;</span>
        <span className="px-4">Max Temerature: {max}&deg;</span>
      </h3>
    );
  }
}
