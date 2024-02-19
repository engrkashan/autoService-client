import React from "react";
import logo from "./autoservisas-logo.jpeg";

import "./styling.css";

const Autoservisas = () => {
  return (
    <div class="page-container">
      <div class="container">
        <img src={logo} class="img-fluid autoservisas-logo" alt="logo" />
      </div>
      <div className="greeting-container">
        <p>
          <h1>Sveiki atvykę į AUTOSERVISAS 222e</h1>
          <h2>Mes rūpinamės Jūsų automobiliais nuo 2021-ųjų</h2>
        </p>
      </div>

      <div className="services">
        <h1 className="heading-black">Mūsų siūlomos paslaugos: </h1>
        <div className="row paslaugos-spacing">
          <a href="/BookingApp">
            {" "}
            <button className="paslaugos-button btn-special">
              Automobilių paruošimas techninei apžiūrai
            </button>{" "}
          </a>
          <div className="col-sm-6">
            <a href="/BookingApp">
              {" "}
              <button className="paslaugos-button">
                Važiuoklės remontas
              </button>{" "}
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/BookingApp">
              <button className="paslaugos-button">
                Tepalų ir filtrų keitimas
              </button>
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/BookingApp">
              <button className="paslaugos-button">
                Stabdžių sistemos remontas
              </button>{" "}
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/BookingApp">
              <button className="paslaugos-button">
                Kompiuterinė diagnostika
              </button>{" "}
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/BookingApp">
              <button className="paslaugos-button">Sankabos remontas</button>{" "}
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/BookingApp">
              <button className="paslaugos-button">
                Kondicionierių pildymas ir remontas
              </button>{" "}
            </a>
          </div>
          <a href="/Contact">
            <button className="paslaugos-button btn-special">
              Kitos paslaugos
            </button>
          </a>
        </div>
      </div>
      <footer>
        <h4>
          AUTO<span className="red-text">SERVISAS 222E</span>
        </h4>
        <p className="p-footer">
          Mus rasite adresu: Staniūnų g. 67a, Panevėžys
        </p>
        <p className="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>
    </div>
  );
};

export default Autoservisas;
