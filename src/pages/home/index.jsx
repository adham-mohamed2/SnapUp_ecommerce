import React, { useContext  } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideImage from "../../componant/slideImage/index"
import Card from "../../componant/prodcut-card/index"
import Reload from "../../componant/reload/index"
import "./home.css"
import { GlobalContext } from '../../store'
function Home() {
  const {allProduct , LimitCategory , handleIncreaseProduct , handleDecreaseProduct , loader } = useContext(GlobalContext);

  //***************************** get category product *****************************

    let categoryOne = allProduct.filter(product=>product.category === LimitCategory[0]);
    let categoryTwo = allProduct.filter(product=>product.category === LimitCategory[1]);
    let categoryTree = allProduct.filter(product=>product.category === LimitCategory[2]);
  
    //*************************** carousel responsev ********************************

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1179 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1197, min: 991 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
      },
      middele:{
        breakpoint: { max: 991, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    //******************************************************************************** */

    if(loader){
      return(
        <Reload/>
      )
    }

    //********************************************************************************* */
  return (
    <div className='home-section'>
      <div className="container">
        <div className="slide-home-section mb-4" style={{width:"100%" , height:'320px'}}>
          <SlideImage/>
        </div>
        <div className="all-product-section mb-4">
          <div className="header">
            <h4 className='fw-bold fs-4 text-capitalize'>see our product</h4>
          </div>
          <div className="content-all-product-section mb-3">
            {
              allProduct.length > 0 ? allProduct.map(product=><Card key={product.id} product={product}/>):<Reload/>
            }
          </div>
          <div className="button text-center">
            <button onClick={handleIncreaseProduct} className='show-more btn btn-lg text-capitalize mb-3 mb-sm-0 me-sm-5 me-0'>show more</button>
            <button onClick={handleDecreaseProduct} className='show-less btn btn-lg text-capitalize'>show less</button>
          </div>
        </div>
        <div className="categoryOne-section mb-4">
            <div className="header">
              <h4 className='fw-bold fs-4 text-capitalize'>{LimitCategory[0]}</h4>
            </div>
            <Carousel  className='content-categpryOne pb-4'
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px px-2 "
              >
              {
                categoryOne.length > 0 ? categoryOne.map(product=><Card key={product.id} product={product}/>):<Reload/>
              }
          </Carousel>
        </div>
        <div className="categoryTwo-section mb-4">
          <div className="header">
            <h4 className='fw-bold fs-4 text-capitalize'>{LimitCategory[1]}</h4>
          </div>
          <Carousel className='content-categpryTwo pb-4'
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px px-2 "
              >
              {
                categoryTwo.length > 0 ? categoryTwo.map(product=><Card key={product.id} product={product}/>):<Reload/>
              }
          </Carousel>
        </div>
        <div className="categoryTree-section mb-4">
          <div className="header">
            <h4 className='fw-bold fs-4 text-capitalize'>{LimitCategory[2]}</h4>
          </div>
          <Carousel className='content-categpryTree pb-4'
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px px-2 "
              >
              {
                categoryTree.length > 0 ? categoryTree.map(product=><Card key={product.id} product={product}/>): <Reload/>
              }
          </Carousel>
        </div>
        
      </div>
    </div>
  )
}

export default Home