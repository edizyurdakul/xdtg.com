import React from "react";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="sub-header">
        <nav>
          <a href="index.html">
            <img src="images/222.png" />
          </a>
          <div className="nav-links" id="navLinks">
            <i
              className="fa fa-close"
              onClick={() => {
                setOpen(false);
              }}
            ></i>
            <ul>
              <li>
                <a href="index.html">Ana Səhifə</a>
              </li>
              <li>
                <a href="about.html">Haqqımızda</a>
              </li>
              <li>
                <a href="course.html">Nailiyyətlərimiz</a>
              </li>
              <li>
                <a href="blog.html">Bloq</a>
              </li>
              <li>
                <a href="contact.html">Əlaqə</a>
              </li>
              <li>
                <a href="registration.html">E-Məktəb</a>
              </li>
            </ul>
          </div>
          <i
            className="fa fa-bars"
            onClick={() => {
              setOpen(false);
            }}
          ></i>
        </nav>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Azərbaycan üzrə gimnaziyalar arasında ilk 5-də!</h1>
            <p>Məktəb haqqında geniş məlumat</p>
            <a
              href="https://www.facebook.com/profile.php?id=100063447986001"
              className="hero-btn red-btn"
            >
              İndi Kəşf Et!
            </a>
          </div>
          <div className="about-col">
            <img src="images/about.jpg" />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100063447986001">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=100063447986001"
          className="footer-link"
        >
          <p>
            Made By <i className="fa fa-heart-o"> 10IT 2022 </i>{" "}
          </p>
        </a>
      </section>
    </>
  );
}
