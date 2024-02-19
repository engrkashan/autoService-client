import React from "react";

const Contact = () => {
  return (
    <div class="page-container">
      <div class="container-white">
        <h1>Jeigu turite klausimų, susisiekite:</h1>
        <div class="contact-container">
          <h3>
            <a
              href="https://www.facebook.com/profile.php?id=100070816060830"
              target="_blank"
              rel="noreferrer"
              class="link-facebook"
            >
              <i class="fa-brands fa-square-facebook icon-facebook"> </i> AUTO
              <span class="red-text">SERVISAS 222E</span>
            </a>{" "}
          </h3>
          <h3>📞 +37063222439</h3>

          <h3>
            <a
              class="link-email"
              href="mailto:service222e@gmail.com"
              title="Email to Autoservisas 222e"
            >
              ✉️ service222e@gmail.com
            </a>
          </h3>
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

export default Contact;
