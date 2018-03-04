import React, {useState} from "react";
import {withTheme} from "./theme";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Router from "./components/Router";

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Router />
    </div>
  );
};

export default withTheme(App);
