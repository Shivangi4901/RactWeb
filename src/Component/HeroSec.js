import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";

export default function HeroSec() {
  return (
    <Wrap>
      <div className="container grid grid-two-col">
        <div className="sec-hero-data">
          <h1 className="hero-head">Welcome to my page</h1>
          <p className="hero-para">
            I'm Candy. I love People who call me full stack developer, Web
            developer and freelancer.
          </p>
          <Button class="btn">
            <NavLink to="/Contact"> Hire me </NavLink>
          </Button>
        </div>

        <div className="sec-hero-image">
          <img src="Tripod.png" alt="Camera" width="220px" />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.section`
  padding: 9rem 0;
  .sec-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 6rem;
  }
  .hero-head {
    text-transform: uppercase;
    font-size: 5rem;
  }
  .hero-para {
    font-size: 7rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    /* max-width: 60rem; */
  }
  .sec-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* picture {
    text-align: cnter;
  }*/
`;
