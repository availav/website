import "./whyus.css"

function Whyus() {
  return (
    <section className="whyus">
      <div className="container-fluid container_whyus">
        <div className="section-title">
          <h1>
            Why choose <span> Our Resturant </span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa perspiciatis voluptatem, <br/>mollitia repellat exercitationem maxime quod, aperiam aliquid sit dolor.</p>
        </div>
        <div className="container-box">
        <div className="row   mt-4 gap-4 mr-sm-5 boxes">
          <div className="col-lg-4 
           col-md-12 col-sm-12 mt-4 mt-lg-0  box1">
            <div className="box">
            <h1>01</h1>
            <h5>Lorem, ipsum.</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ut!</p>
            </div>
        
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-4 mt-lg-0 box2">
            <div className="box">
            <h1>02</h1>
            <h5>Lorem, ipsum.</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ut!</p>
            </div>
          
      
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-4 mt-lg-0  box3">
            <div className="box">
            <h1>03</h1>
            <h5>Lorem, ipsum.</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ut!</p>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Whyus