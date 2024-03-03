import img from "../../assets/slide-1.jpg";
import "./events.css";

function Events() {
  return (
    <section className="events">
      <div className="container">
        <div className="section-title">
          <h1>
            Organize Your <span>Events </span>in our Restaurant
          </h1>
        </div>
        <div className="slider">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active indi"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <img
                      src={img}
                      className="d-block w-100 event-img img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 content">
                    <h1 className="ms-sm-25"  >Birthday Parties</h1>

                    <h4 className="ms-sm-25">$240</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates explicabo corrupti officia iure, ut .
                    </p>
                    <ul>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, vel? Reiciendis quisquam qui esse, maiores
                      eveniet recusandae explicabo, nobis, officiis optio error
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 ">
                    <img
                      src={img}
                      className="d-block w-100 img-fluid  event-img "
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 content">
                    <h1>Birthday Parties</h1>

                    <h4>$240</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates explicabo corrupti officia iure, ut .
                    </p>
                    <ul>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, vel? Reiciendis quisquam qui esse, maiores
                      eveniet recusandae explicabo, nobis, officiis optio error
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 col-sm-12  ">
                    <img src={img} className="d-block w-100  event-img img-fluid" alt="..." />
                  </div>
                  <div className="col-lg-6  col-sm-12 content">
                    <h1>Birthday Parties</h1>

                    <h4>$240</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates explicabo corrupti officia iure, ut .
                    </p>
                    <ul>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                      <li>
                        <p>cbvhjafl jsdbuki bjskdf</p>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, vel? Reiciendis quisquam qui esse, maiores
                      eveniet recusandae explicabo, nobis, officiis optio error
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
