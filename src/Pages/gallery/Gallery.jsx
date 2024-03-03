import React from 'react'
import "./gallery.css"
import img1 from "../../assets/gallery-1.jpg"
import img2 from "../../assets/gallery-2.jpg"
import img3 from "../../assets/gallery-4.jpg"
import img4 from "../../assets/gallery-7.jpg"

function Gallery() {
  return (
   <section className="gallery">
    <div className="container-fluid">
        <div className="gallery-title">
            <h1>Some photos from <span>Our Restaurant</span> </h1>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at <br/> voluptas atque vitae autem.</p>
        </div>
        <div className="row gx-1">
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img1} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img2} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img3} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img4} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img4} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img3} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img2} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-1 ">
                <div className="gallery-item">
                    <img src={img1} alt="" className='img-fluid' />
                </div>
            </div>
            
        </div>
    </div>
   </section>
  )
}

export default Gallery
