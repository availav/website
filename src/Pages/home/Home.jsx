import "./home.css";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import Navbar from "../../components/navbar/Navbar"

function Home() {
  return (
    <div className="container-fluid hero gx-0">
      <div className="row krishna gx-0">
        <Navbar />
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100 krishna1" alt="slide1" />
              <div className="carousel-container carousel-caption d-none d-md-block">
              <div className="carousel-content">
              <h5 className="animated bounceInRight">
                  <span>Delicious</span> slide label
                </h5>
                <p className="animated bounceInLeft">
                  Some representative placeholder content for the first slide.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quo nostrum officiis fuga beatae nulla ducimus illo a
                  assumenda, maxime omnis!
                </p>
              </div> 
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100 krishna1" alt="slide2" />
              <div className=" carousel-container carousel-caption d-none d-md-block">
              <div className="carousel-content">
              <h5 className="animated bounceInRight">
                  Second slide <span>label</span>
                </h5>
                <p className="animated bounceInLeft">
                  Some representative placeholder content for the second slide.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quasi laudantium totam quidem alias reiciendis
                  blanditiis aliquid aut nostrum rem.
                </p>
              </div>
                
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100 krishna1" alt="slide3" />
              <div className=" carousel-container carousel-caption d-none d-md-block">
              <div className="carousel-content">
              <h5 className="animated bounceInRight">
                  Third <span>slide</span> label
                </h5>
                <p className="animated bounceInLeft">
                  Some representative placeholder content for the third slide.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores accusamus, nihil alias odit quis similique maxime ex
                  nulla aperiam ipsam.
                </p>
              </div>
                
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;


// function Home() {
//   return (
//     <div className="container-fluid hero gx-0  ">
//       <div className="row">
//        <Navbar/>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide carousel-fade"
//         data-bs-ride="true"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
        
//         <div className="carousel-inner ">
        
//           <div className="carousel-item active  d-block d-block w-100  ">
//             <img src={slide1} className=" slide-img " alt="slide1" />
//             <div className="carousel-caption  ">
//               <h5 className="animated bounceInRight">
//                 <span>Delicious</span> slide label
//               </h5>
//               <p className="animated bounceInLeft d-none d-md-block ">
//                 Some representative placeholder content for the first slide.
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
//                 nostrum officiis fuga beatae nulla ducimus illo a assumenda,
//                 maxime omnis!
//               </p>
//             </div>
//           </div>
//           <div className="carousel-item d-block w-100">
//             <img src={slide2} className=" slide-img" alt="slide2" />
//             <div className="carousel-caption d-none d-md-block wow fadeInDown slow ">
//               <h5 className="animated bounceInRight" >
//                 second slide <span>label</span>
//               </h5>
//               <p className="animated bounceInLeft d-none d-md-block">
//                 Some representative placeholder content for the first slide.
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Commodi quasi laudantium totam quidem alias reiciendis
//                 blanditiis aliquid aut nostrum rem.{" "}
//               </p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={slide3} className=" slide-img" alt="slide3" />
//             <div className="carousel-caption   ">
//               <h5 className="animated bounceInRight">
//                 Third <span>slide</span> label
//               </h5>
//               <p className="animated bounceInLeft d-none d-md-block">
//                 Some representative placeholder content for the first slide.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//                 accusamus, nihil alias odit quis similique maxime ex nulla
//                 aperiam ipsam.
//               </p>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
        
//       </div>
        
//       </div>
      
//     </div>
//   );
// }

// export default Home;
