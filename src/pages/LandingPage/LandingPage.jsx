import React from "react";
import ColumnaArticulo from "./ColumnaArticulo";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <p>Soy navbar</p>
      <section className="page-container container-xl d-flex justify-content-between">
        <section className="page__leftColumn">a</section>
        <section className="page__centerColumn">< ColumnaArticulo/></section>
        <section className="page__rightColumn">c</section>
      </section>
      <p>Soy Footer</p>
    </>
  );
};

export default LandingPage;
