import "./about.css";
import img from "../../assets/slide-1.jpg";

function about() {
  return (
    <section className="about">
      <div className="container-about mx-25px">
        <div className="row">
          <div className="col-lg-6">
            <img src={img} alt="about_img" className="img-fluid" />
          </div>
          <div className="col-lg-6 about-text ">
            <h4>cdshaf bdqwdf bckwid nxjswsi njwhdionx kjjdsjol</h4>
            <p className="para"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates explicabo corrupti officia iure, ut .
            </p>
            <ul>
              <li>
                <p>cbvhjafl jsdbuki bjskdf</p>
              </li>
              <li>sncaj khadi hqifo klajf jhc okkopio dfdg fghhj</li>
              <li>
                <p>cbvhjafl jsdbuki bjskdf</p>
              </li>
              <li>
                <p>cbvhjafl jsdbuki bjskdf</p>
              </li>
            </ul>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, vel? Reiciendis quisquam qui esse, maiores eveniet
              recusandae explicabo, nobis, officiis optio error reprehenderit
              repudiandae repellat in assumenda placeat nesciunt voluptates.
              Inventore delectus magnam quae, quod beatae eligendi ipsam iste,
              animi eos molestias vel numquam reiciendis assumenda. Nostrum vero
              repellat cum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
