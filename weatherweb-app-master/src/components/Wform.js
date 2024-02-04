import React, { useState } from "react";
import { Show } from "./Show";
import "./Wform.css";
const Api_Key = "429736441cf3572838aa10530929f7cd";



export const Wform = () => {


  const [whet, setWhet] = useState({
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: null,
    temp_min: null,
    description: "",
    error: false,
  });






  // const get_WeatherIcon = (icons, rangeId) => {
  //   switch (true) {
  //     case rangeId >= 200 && rangeId < 232:
  //       setWhet({ icon: icons.Thunderstorm });
  //       break;
  //     case rangeId >= 300 && rangeId <= 321:
  //       setWhet({ icon: icons.Drizzle });
  //       break;
  //     case rangeId >= 500 && rangeId <= 521:
  //       setWhet({ icon: icons.Rain });
  //       break;
  //     case rangeId >= 600 && rangeId <= 622:
  //       this.setWhet({ icon: icons.Snow });
  //       break;
  //     case rangeId >= 701 && rangeId <= 781:
  //       setWhet({ icon: icons.Atmosphere });
  //       break;
  //     case rangeId === 800:
  //       this.setWhet({ icon: icons.Clear });
  //       break;
  //     case rangeId >= 801 && rangeId <= 804:
  //       setWhet({ icon: icons.Clouds });
  //       break;
  //     default:
  //       setWhet({ icon: icons.Clouds });
  //   }
  // };


  const calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };


  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("Mirzapur");

  const getWhether = async (e) => {
    console.log(country);
    console.log(city);
    // e.preventDefault();
    console.log(whet);
    if (country && city) {

      const acall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
      const data = await acall.json();
      setWhet({
        city: `${data.name},${data.sys.country}`,
        country: data.sys.country,

        main: data.weather[0].main,
        celsius: calCelsius(data.main.temp),
        temp_max: calCelsius(data.main.temp_max),
        temp_min: calCelsius(data.main.temp_min),
        description: data.weather[0].description,

        error: false,
      });

      console.log(whet);
    }
    else {
      setWhet(
        {
          error: true
        }
      );

      console.log(whet);
    }
  };

  return (
    <div className="absolute top-8 h-4  left-auto w-full">

      <div >
        {whet.error ? error() : ""}</div>
      <header>

        <div className="flex flex-wrap absolute top-8 h-4 w-full justify-center   ">

          <div className="m-4">
            <input
              type="text"
              className="textarea"
              placeholder="City"
              value={city}
              onChange={
                (e) => {
                  setCity(e.target.value)
                }
              }
              name="city"
              autoComplete="off"
            />
          </div>

          <div className="m-4">
            <input

              type="text"
              className="textarea"
              placeholder="Country"
              value={country}
              onChange={
                (e) => {
                  setCountry(e.target.value)
                }}
              name="country"
              autoComplete="off"
            />
          </div>


          <div className="m-4">
            <button type="button" onClick={getWhether} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              
              Get Weather
              
              </button>
            {/* <button  onClick={getWhether}className="">Get Weather</button> */}
          </div>

        </div>

        <Show
          cityname={whet.city}
          //   weatherIcon={this.state.icon}
          temp_celsius={whet.celsius}
          temp_max={whet.temp_max}
          temp_min={whet.temp_min}
          description={whet.description}
        />


      </header>

    </div>
  );
};




const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};
