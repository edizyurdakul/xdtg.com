import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <h1>Bizimlə əlaqə saxlayın</h1>
      </section>

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.3696442311913!2d49.97677196362343!3d40.39641725719795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030639ea03e5dd5%3A0x5760020444fc48a6!2zWGFyaWNpIERpbGzJmXIgVMmZbWF5w7xsbMO8IEdpbW5heml5YQ!5e0!3m2!1str!2saz!4v1677438440418!5m2!1str!2saz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>Qaraçuxur qəsəbəsi, Cəlal Qurbanov küçəsi</h5>
                <p>Suraxanı, Bakı, Azərbaycan</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+994 12 427 55 09</h5>
                <p>Həftə içi 09:00-17:00</p>
                <p>Şənbə günü 09:00-13:00</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>mektebinemaili@gmail.com</h5>
                <p>Sorğunuzu mail ilə göndərin</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form method="post" action="contact-form-handler.php">
              <input type="text" name="name" placeholder="Ad Soyad" required />
              <input
                type="email"
                name="email"
                placeholder="Email ünvanı"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Mesajınızın başlığı"
                required
              />
              <textarea
                rows={8}
                name="message"
                placeholder="Mesajınız"
                required
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                Göndər
              </button>
            </form>
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
      </section>
    </>
  );
}
