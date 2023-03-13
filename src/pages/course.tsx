import React from "react";
import { useState } from "react";

export default function Course() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <section className="sub-header">
        <nav>
          <a href="index.html">
            <img src="images/222.png" />
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
      </section>
      <section className="facility">
        <div className="blog-right">
          <h3>Uğurlarımız</h3>
          <div>
            <span>Statistika1</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika2</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika3</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika4</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika5</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika6</span>
            <span>Ədəd</span>
          </div>
          <div>
            <span>Statistika7</span>
            <span>Ədəd</span>
          </div>
        </div>
        <h1>İmkanlarımız</h1>
        <div className="row">
          <div className="facility-col">
            <img src="images/library.png" />
            <h3>World className Library</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla.
            </p>
          </div>
          <div className="facility-col">
            <img src="images/basketball.png" />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla.
            </p>
          </div>
          <div className="facility-col">
            <img src="images/cafeteria.png" />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>Şagirdlərimizin fikirləri</h1>
        <div className="row">
          <div className="testimonial-col">
            <img src="images/user1.jpg" />
            <div>
              <p>Müəllimlərin diqqəti , amlayışı qüsursuzdur!</p>
              <h3>Çobanov Cəmil</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="testimonial-col">
            <img src="images/user2.jpg" />
            <div>
              <p>Şagirdlərə verilən qiymətə söz ola bilməz!</p>
              <h3>Əsgərov Tural</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
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
          Made By <i className="fa fa-heart-o"> XDTG Team </i>{" "}
        </p>
      </section>
    </>
  );
}
