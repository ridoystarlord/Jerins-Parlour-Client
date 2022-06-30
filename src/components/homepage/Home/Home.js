import React from "react";
import Footer from "../../shared/Footer/Footer";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProfessionalBanner from "../ProfessionalBanner/ProfessionalBanner";
import SendMessage from "../SendMessage/SendMessage";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Services></Services>
      <ProfessionalBanner></ProfessionalBanner>
      <Testimonials></Testimonials>
      <SendMessage></SendMessage>
      <Footer></Footer>
    </div>
  );
};

export default Home;
