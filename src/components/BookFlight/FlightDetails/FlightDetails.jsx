import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import { Routes, Route, useNavigate } from "react-router";
import { useState } from "react";

export default function FlightDetails() {
  const navigate = useNavigate();
  const [Type, setType] = useState();
  const [Data, setData] = useState({});

  const BookFlightsNav = () => {
    navigate("OneWay");
  };
  return (
    <div>
      <Routes>
        <Route path="*">
          <Route
            path="OneWay"
            element={<OneWay data={Data} setData={setData} />}
          />
          <Route
            path="RoundTrip"
            element={<RoundTrip data={Data} setData={setData} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
