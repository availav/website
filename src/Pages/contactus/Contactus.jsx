import "./contactus.css";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function contactus() {
  return (
    <section className="contact">
      <div className="container-fluid">
        <div className="contact-title">
          <h1>Contact <span style={{color:"black"}} >Us</span></h1>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis <br />
            est adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <div className="contact-map gx-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.233683144413!2d77.58263987460768!3d12.956893287357154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a932188871%3A0x59be92b0a04f290e!2sTechTree%20IT%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1709271263379!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="map gx-none"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container-bottom">
          <div className="info-wrap">
            <div className="row iconrow">
              <div className="col-lg-3 col-md-6 info
              d-flex">
               
                  <div className="icon">
                  <CiLocationOn  className="iconr" />

                  </div>
                  <div className="icon-content">
                    <p className="p1">Location:</p>
                    <p className="p2">
                    Lorem ipsum dolor
                    <br /> sit, amet .
                  </p>
                  
                </div>
              
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 info mt-4 mt-lg-0 d-flex">
              <div className="icon">
              <FaRegClock  className="iconr" />

                  </div>
                  <div className="icon-content">
                    <p className="p1">Open Hours:</p>
                    <p className="p2">
                    monday-saturday <br />
                  09:00-06:00
                  </p>
                 </div>
              </div>
              <div className="col-lg-3 col-md-6 info col-sm-12 mt-4 mt-lg-0 d-flex">
              <div className="icon">
              <MdOutlineMail className="iconr" />
                  </div>
                  <div className="icon-content">
                    <p className="p1">Email:</p>
                    <p className="p2">
                    info@example.com
                  <br />
                  className@tech.com.
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-6 info col-sm-12 mt-4 mt-lg-0 d-flex">
              <div className="icon">
              <IoCallOutline  className="iconr" />

                  </div>
                  <div className="icon-content">
                    <p className="p1">Call:</p>
                    <p className="p2">
                    +5698245698567
                  <br />
                  +3847587098603.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <form role="form" method="post">
            <div className="row form-group">
              <div className="col-md-6 form-group mt-4">
                <input
                  type="text"
                  placeholder="first-name"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="col-md-6 form-group mt-4 mt-md-o">
                <input
                  type="text"
                  placeholder="last-name"
                  className="form-control"
                  required
                ></input>
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                placeholder="subject"
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-group mt-3">
              <textarea
                name="msg"
                placeholder="message"
                id=""
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit">send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default contactus;
