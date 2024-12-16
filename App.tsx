import { View, StatusBar } from "react-native";

import "./global.css";
import { Home } from "./src/screens/";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
