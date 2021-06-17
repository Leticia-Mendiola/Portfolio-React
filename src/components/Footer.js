import React from "react";
// import "./style.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Portfolio of Leticia Mendiola</h5>
                    <p className="grey-text text-lighten-4">Leticia Mendiola is a full time student enrolled in the University of Texas at San Antonio (UTSA) Full Stack Web Development Bootcamp. Albeit skilled in full stack programing, her passion and strenghts are notably in front-end web develpment and design. She looks forward to launching her exciting new career following graduation in July 2021.</p>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <span>Leticia Mendiola { new Date().getFullYear() }</span>
                <a className="grey-text text-lighten-4 right" href="mailto: lmendiola509@gmail.com">Email</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;