import { render } from "solid-js/web";
import App from "./App";
import Home from "./routes/home";
import { Router, Route, Routes } from "@solidjs/router";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} /> 
      </Routes>
    </Router>
  ),
  root
);
