import React, { createContext, useState, useEffect, useRef } from "react";
import CoranaData from "./Data";
import axios from "axios";
const CoranaContext = createContext();
const CoranaProvider = (props) => {
  const [corana, setCorana] = useState({
    deaths: "200",
    confirmed: "500",
    recovered: "200",
  });
  const [coronaData, setCoronaData] = useState({});

  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Death",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Confirmed",
        data: [10, 0, 45, 20, 47, 50, 100, 95],
      },
      {
        name: "Recovered",
        data: [0, 50, 75, 40, 80, 70, 10, 88],
      },
    ],
  });

  var coranaData;
  var coranaCountries;

  console.log(coranaCountries);
  useEffect(() => {
    var dataURI = "https://pomber.github.io/covid19/timeseries.json";
    axios
      .get(dataURI)
      .then((data) => {
        coranaData = data.data;
        coranaCountries = Object.keys(coranaData);
        console.log(coranaData);
        console.log(coranaCountries);

        var aggregateData = {};
        for (var i = 0; i < coranaCountries.length; i++) {
          var country = coranaCountries[i];
          for (var j = 0; j < coranaData[country].length; j++) {
            if (aggregateData[country]) {
              aggregateData[country] = {
                country: country,
                confirmed:
                  aggregateData[country]["confirmed"] +
                  coranaData[country][j].confirmed,
                deaths:
                  aggregateData[country]["deaths"] +
                  coranaData[country][j].deaths,
                recovered:
                  aggregateData[country]["recovered"] +
                  coranaData[country][j].recovered,
              };
            } else {
              aggregateData[country] = {
                country: country,
                confirmed: coranaData[country][j].confirmed,
                deaths: coranaData[country][j].deaths,
                recovered: coranaData[country][j].recovered,
              };
            }
          }
          return setCoronaData(aggregateData);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  console.log(coronaData);
  return (
    <CoranaContext.Provider value={{ ...corana, ...chart }}>
      {props.children}
    </CoranaContext.Provider>
  );
};
const CoranaConsumer = CoranaContext.Consumer;
export { CoranaProvider, CoranaConsumer };
