/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Ana Səhifə</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="./images/222.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="header">
        <nav>
          <a href="index.html">
            <img src="./images/222.png" />
          </a>
          <div
            className="nav-links"
            id="navLinks"
            style={!open ? { right: "-200px" } : { right: "0px" }}
          >
            <i
              className="fa fa-close"
              onClick={() => {
                setOpen(false);
              }}
            ></i>
            <ul>
              <li>
                <a href="index.html">Ana səhifə</a>
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
              setOpen(true);
            }}
          ></i>
        </nav>
        <div className="text-box">
          <h1>Xarici Dillər Təmayüllü Gimnaziya</h1>
          <a href="contact.html" className="hero-btn">
            Əlaqə Üçün klikləyin
          </a>
        </div>
      </section>

      <section className="course">
        <h1>Bloq</h1>
        <div className="row">
          <div className="course-col">
            <h3>Paylaşım1</h3>
            <p>Paylaşım1 mətni</p>
          </div>
          <div className="course-col">
            <h3>Paylaşım2</h3>
            <p>Paylaşım2 mətni</p>
          </div>
          <div className="course-col">
            <h3>Paylaşım3</h3>
            <p>Paylaşım3 mətni</p>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100063447986001">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          Made By <i className="fa fa-heart-o"> 10IT 2022 </i>{" "}
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/turalasgarovv/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/cemil_chobanov/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/07.masimoff/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </section>
    </>
  );
}
