import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRtaing from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRtaing
      maxRating={5}
      message={["Terrible", "Bad", "Good", "VeryGood", "Amazing"]}
    />
    <StarRtaing size={24} color="red" defaultRating={3} /> */}
  </React.StrictMode>
);
