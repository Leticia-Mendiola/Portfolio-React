import React from "react";
// import "./style.css";

function Footer() {
  return (
    <footer className="footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Portfolio of Leticia Mendiola</h5>
                    <p class="grey-text text-lighten-4">Leticia Mendiola is a full time student enrolled in the University of Texas at San Antonio (UTSA) Full Stack Web Development Bootcamp. Albeit skilled in full stack programing, her passion and strenghts are notably in front-end web develpment and design. She looks forward to launching her exciting new career following graduation in July 2021.</p>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <span>Leticia Mendiola { new Date().getFullYear() }</span>
                <a class="grey-text text-lighten-4 right" href="mailto: lmendiola509@gmail.com">Email</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;