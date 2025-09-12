import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/home-screen/HomeScreen";
import NewBuildings from "../screens/new-buildings/NewBuildings";
import { ScreenList } from "./constants/ScreenList";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ScreenList.Home} element={<HomeScreen />} />
        <Route path={ScreenList.NewBuildings} element={<NewBuildings />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
