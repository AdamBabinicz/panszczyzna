import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Designs from "./components/Designs";
import BuySell from "./components/BuySell";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #buySell1,
        #buySell2,
        #buySell3,
        #blogs,
        footer
    `,
        {
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs />
      <BuySell />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
