import React from 'react'
import SlideImageOne from "../../image/assits/slider_img_1.jpg"
import SlideImageTwo from "../../image/assits/slider_img_2.jpg"
function SlideImage() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide w-100 h-100 " data-bs-ride="carousel">
          <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                  <img src={SlideImageTwo} className="d-block w-100 h-100" alt="..."/>
              </div>
              <div className="carousel-item h-100">
                  <img src={SlideImageOne} className="d-block w-100 h-100" alt="..."/>
              </div>
          </div>
    </div>
  )
}

export default SlideImage