import React from "react";
import { Header, About, Plans, Footer } from "./containers";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      {<Navbar />}
      <Header />
      <About />
      <Plans />
      <Footer />
    </div>
  );
};

export default App;
