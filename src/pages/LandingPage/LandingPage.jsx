import React from "react";
import ColumnaArticulo from "./ColumnaArticulo";
import { Footer } from "../footer/Footer";
import "./LandingPage.scss";
import Navigation from '../../components/Navigation/Navigation';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import {useState} from "react";

const LandingPage = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>
      <Navigation openMenu={toggle}/> 
      <section className="page-container container-xl d-flex justify-content-between">
        <section className="page__leftColumn">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle}/>
        </section>
        <section className="page__centerColumn">< ColumnaArticulo/></section>
        
        <section className="page__rightColumn">c</section>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
