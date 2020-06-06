import React from "react";
import { Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";

function App() {
  return (
    <div className="App">
      <Nav />
      <section class="section wyr-main">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-two-thirds-tablet is-half-desktop">
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
