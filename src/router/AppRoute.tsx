import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewBuildings from "../screens/new-buildings/NewBuildings";
import { ScreenList } from "./constants/ScreenList";
import { HomeRenovation } from "../screens/home-renovation/HomeRenovation";

const AppRoute: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path={ScreenList.NewBuildings} element={<NewBuildings />} />
        <Route path={ScreenList.HomeRenovation} element={<HomeRenovation />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
