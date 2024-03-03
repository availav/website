import React from "react";
import img1 from "../../assets/specials-1.jpg"
import img2 from "../../assets/specials-3.jpg"
import "./special.css"

function Special() {
  return (
    <section className="special">
      <div className="special-title">
        <h1>
          Check our <span>Specials</span>{" "}
        </h1>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci
          <br /> expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container">
        <div class="row d-flex align-items-start">
        <div className="col-lg-3 col-sm-12">
        <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link spcl active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
             Modi sit est
            </button>
            <button
              class="nav-link spcl"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Lorem, ipsum.
            </button>
           
            <button
              class="nav-link spcl"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              qui quasi ku
            </button>
            <button
              class="nav-link spcl"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              ut expedita aut
            </button>
        </div>
          
          </div>
          <div className="col-lg-9 col-sm-12 mt-4 mt-lg-0">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
            <div className="row">
                <div className="col-lg-9">
                    <h2>Architecto ut aperiam autem id</h2>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div className="col-lg-3">
                    <img src={img1} alt="img1"  className="img-fluid"/>
                </div>
            </div>
              
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-9">
                    <h2>Et blanditiis nemo veritatis excepturi</h2>
                    <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div className="col-lg-3">
                    <img src={img2} alt="img1"  className="img-fluid"/>
                </div>
            </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-9">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div className="col-lg-3">
                    <img src={img1} alt="img1"  className="img-fluid"/>
                </div>
            </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-9">
                    <h2>Architecto ut aperiam autem id</h2>
                    <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div className="col-lg-3">
                    <img src={img2} alt="img1"  className="img-fluid"/>
                </div>
            </div>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Special;
