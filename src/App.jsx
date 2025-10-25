import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Lessors from "./components/Lessors";
import Volcano from "./components/Volcano";
import LovedPlaces from "./components/LovedPlaces";
import Cooperations from "./components/Cooperations";
import Movies from "./components/Movies";
import DeathLevel from "./components/DeathLevel";
import Potions from "./components/Potions";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const handleNotAvailable = () => {
    toast.error("Currently Not Available!");
  };

  return (
    <>
      <Header handleNotAvailable={handleNotAvailable} />
      <Hero />
      <Form handleNotAvailable={handleNotAvailable} />
      <Lessors handleNotAvailable={handleNotAvailable} />
      <Volcano handleNotAvailable={handleNotAvailable} />
      <LovedPlaces />
      <Cooperations />
      <Movies handleNotAvailable={handleNotAvailable} />
      <DeathLevel handleNotAvailable={handleNotAvailable} />
      <Potions handleNotAvailable={handleNotAvailable} />
      <Testimonials />
      <Footer handleNotAvailable={handleNotAvailable} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        dark={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;
