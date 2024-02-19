import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autoservisas from "./pages/Autoservisas";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import BookingApp from "./pages/BookingApp";
import AvailableTimeForm from "./pages/AvailableTimeForm";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./pages/reducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="font">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Autoservisas />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/BookingApp" element={<BookingApp />} />
            <Route path="/AvailableTimeForm" element={<AvailableTimeForm />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
