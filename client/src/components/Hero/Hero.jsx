import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Power Your Future
              <br />
              with Clean
              <br /> Affordable Energy
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
          <span>
            <span className="secondaryText">
              With just a few details about your energy usage,<br />
              we'll calculate the ideal solar setup for you.</span><br />
            <button className="button"> 
            <NavLink to="/estimate">Get a Free Quote</NavLink> </button>
          </span>
            
          </div>

          {/* <SearchBar /> */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./panelpeople.jpg" alt="panelpeople" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
