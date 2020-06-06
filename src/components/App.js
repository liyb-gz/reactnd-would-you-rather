import React from "react";
import { Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <section class="section wyr-main">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-two-thirds-tablet is-half-desktop">
              <Route path="/" exact component={Home} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
